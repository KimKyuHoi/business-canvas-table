import { Button } from 'antd';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PlusOutlined } from '@ant-design/icons';

type TableHeaderProps = {
  onAddClick: () => void;
};

const TableHeader = ({ onAddClick }: TableHeaderProps) => {
  return (
    <Header>
      <span
        css={css`
          font-size: 16px;
          font-weight: 600;
        `}
      >
        회원 목록
      </span>
      <Button type="primary" icon={<PlusOutlined />} onClick={onAddClick}>
        추가
      </Button>
    </Header>
  );
};

export default TableHeader;

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px 14px;
`;
