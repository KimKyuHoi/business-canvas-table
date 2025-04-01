import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('회원 목록 관리 테스트', () => {
  beforeEach(() => {
    render(<App />);
  });

  describe('1. 초기 렌더링', () => {
    test('기본 레코드 2개가 테이블에 표시된다', () => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Foo Bar')).toBeInTheDocument();
    });
  });

  describe('2. 회원 추가', () => {
    test('모달을 통해 새 레코드를 추가할 수 있다', async () => {
      userEvent.click(screen.getByRole('button', { name: /추가/i }));

      userEvent.type(screen.getByLabelText(/이름/), '홍길동');
      userEvent.type(screen.getByLabelText(/주소/), '서울 성북구');
      userEvent.type(screen.getByLabelText(/메모/), '테스트 메모');
      userEvent.type(screen.getByLabelText(/가입일/), '2024-04-01');
      userEvent.selectOptions(screen.getByLabelText(/직업/), '디자이너');
      userEvent.click(screen.getByLabelText(/이메일 수신 동의/));

      userEvent.click(screen.getByRole('button', { name: /등록/ }));

      await waitFor(() => {
        expect(screen.getByText('홍길동')).toBeInTheDocument();
      });
    });
  });

  describe('3. 회원 수정', () => {
    test('John Doe의 메모를 수정할 수 있다', async () => {
      userEvent.click(screen.getByTestId('edit-button-0'));

      const 메모입력 = screen.getByLabelText(/메모/);
      userEvent.clear(메모입력);
      userEvent.type(메모입력, '수정된 메모');

      userEvent.click(screen.getByRole('button', { name: /저장/ }));

      await waitFor(() => {
        expect(screen.getByText('수정된 메모')).toBeInTheDocument();
      });
    });
  });

  describe('4. 회원 삭제', () => {
    test('Foo Bar를 삭제할 수 있다', async () => {
      userEvent.click(screen.getByTestId('delete-button-1'));

      await waitFor(() => {
        expect(screen.queryByText('Foo Bar')).not.toBeInTheDocument();
      });
    });
  });

  describe('5. 필터링', () => {
    test('직업 필터로 개발자만 필터링할 수 있다', async () => {
      const 직업헤더 = screen.getByText('직업').closest('th');
      expect(직업헤더).not.toBeNull();

      const filterButton = within(직업헤더!).getByRole('button');

      userEvent.click(filterButton);
      userEvent.click(screen.getByText('개발자'));

      await waitFor(() => {
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.queryByText('Foo Bar')).not.toBeInTheDocument();
      });
    });
  });

  describe('6. 유효성 검증', () => {
    test('이름이 비어 있거나 20자를 초과하면 에러 메시지를 모달 안에 표시한다', async () => {
      userEvent.click(screen.getByRole('button', { name: /추가/ }));

      const modal = await screen.findByRole('dialog');
      const modalScope = within(modal);

      const 이름입력 = modalScope.getByLabelText(/이름/);
      userEvent.type(이름입력, 'a'.repeat(25));

      const 주소입력 = modalScope.getByLabelText(/주소/);
      userEvent.type(주소입력, '서울 마포구'.repeat(3));

      const 메모입력 = modalScope.getByLabelText(/메모/);
      userEvent.type(메모입력, '메모'.repeat(30)); //

      userEvent.click(modalScope.getByRole('button', { name: /추가/ }));

      await waitFor(() => {
        expect(modalScope.getByText(/20자 이하/)).toBeInTheDocument();
        expect(modalScope.getByText(/50자 이하/)).toBeInTheDocument();
      });
    });
  });
});
