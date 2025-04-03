# Business Canvas Frontend 사전과제

Business Canvas frontend 사전과제입니다.

## 기술선택

- **Core**: React, TypeScript
- **CSS**: Emotion, Ant Design

## 아키텍처 및 환경 설계

서비스의 특성상 복잡한 비즈니스 로직이 필요하지 않다고 판단하여, **기본적인 폴더 구조**를 기반으로 구성했습니다.

- **components**:
  `common`과 `feature` 폴더로 나누어, 공용 컴포넌트와 각 페이지 전용 컴포넌트를 분리했습니다.
- **constants**:
  변하지 않는 상수값이나 설정값들을 정의했습니다.
- **hooks**:
  UI와 로직을 분리하기 위해 공통 로직 또는 비즈니스 로직을 커스텀 훅으로 구성했습니다.
- **pages**:
  각 페이지를 구성하는 레이아웃 및 컴포넌트를 조합하여 정의했습니다.
- **styles**:
  전역 스타일 등 공통으로 사용되는 스타일 파일을 모아두었습니다.
- **utils**:
  React 또는 의존성에 독립적인 기능들을 유틸 함수로 분리하여 관리했습니다.
- **types**:
  도메인 전반에서 공통으로 사용되는 타입(엔티티 등)을 정의했습니다.

```zsh
📦src
 ┣ 📂components
 ┣ 📂constants
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
```

> ### 🤔 왜 Ant Design 컴포넌트를 바로 사용하지 않고 `common`에 재정의했는가?
>
> 과제에서 제공된 **Figma 디자인을 최대한 정확하게 구현**하기 위해, Ant Design 컴포넌트를 그대로 사용하는 대신 `common` 폴더에 별도의 컴포넌트로 래핑하여 재정의했습니다.
>
> 또한, 과제 요구사항에 명시된 **특정 타입 및 기능만을 노출**시키기 위해, 불필요한 props를 제한하거나 UI/UX 요구 조건에 맞게 커스터마이징된 형태로 구현했습니다.
>
> 마지막으로, **확장성을 고려**하여 `...rest`를 사용해 props를 유연하게 전달할 수 있도록 처리했으며, 이로 인해 프로젝트의 **유지보수성과 재사용성**도 함께 향상시킬 수 있었습니다.

### VSCode Snippet 템플릿 제작

개발 생산성을 높이기 위해 자주 사용하는 코드 구조를 VSCode 사용자 스니펫으로 등록해 사용했습니다. 아래와 같은 네 가지 스니펫을 구성하여 반복되는 코드 작성을 빠르게 처리할 수 있도록 했습니다:

- **`/function`**: 파일명을 기반으로 `PascalCase` 함수명을 자동 생성하여 `export function` 형태로 템플릿 코드를 삽입합니다.
- **`/const`**: 주로 커스텀 훅 등을 만들 때 사용하며, `export const` 구조로 자동 생성됩니다.
- **`/file`**: 기본적인 파일 컴포넌트 템플릿으로, 반환 값과 `default export`를 포함한 기본 틀을 빠르게 생성합니다.
- **`/api`**: API 관련 템플릿으로, 타입 정의, Path 함수, 요청 함수까지 기본 구조를 한번에 생성할 수 있습니다.

모든 템플릿은 현재 파일명을 자동으로 `PascalCase`로 변환해 함수명에 적용되며, **일관된 코드 스타일 유지와 개발 속도 향상**을 위해 활용하였습니다.

## 기능 구현

### 동적 필터링 기능 구현

테이블에서 필드별로 **동적으로 필터링 옵션이 생성**되도록 유틸 함수를 직접 구현하였습니다. 레코드 데이터(`DataType[]`)를 기반으로 특정 필드의 유니크한 값들을 추출하고, 이를 기반으로 `Ant Design Table`의 `filterDropdown`에 전달할 수 있는 옵션 리스트를 생성합니다.

```tsx
export function getFilterOptions(list: DataType[], key: keyof DataType) {
  const unique = [...new Set(list.map((item) => item[key]))];
  return unique.map((value) => ({
    label: String(value),
    value: String(value),
  }));
}
```

이 방식으로 구현함으로써:

- **레코드가 추가/삭제되더라도 필터링 옵션이 자동으로 업데이트**되어 유지보수가 쉬운 구조를 만들었고,
- 모든 필드(이름, 주소, 메모, 가입일, 직업 등)에 **재사용 가능한 공통 필터 옵션 생성 로직**을 구성하였습니다.

이를 통해 필터 기능의 **확장성, 유연성, 재사용성**을 확보할 수 있었습니다.

### 저장 기능 구현

.env의 `VITE_STORAGE` 값에 따라 `in-memory` 또는 `local-storage` 중 저장 방식을 선택할 수 있도록 구현했습니다.

과제에서는 `local-storage`를 기준으로 개발했으며, 브라우저 새로고침이나 서버 재시작 이후에도 데이터가 유지됩니다.

- `storage`라는 공통 인터페이스를 만들어 실제 저장 방식은 `inMemoryStorage` 또는 `localStorageStorage` 중 하나를 선택합니다.
- 두 방식 모두 동일한 메서드(`getItem`, `setItem`, `removeItem`, `clear`)를 가지며, 내부 구현만 다릅니다.
- `.env`의 설정값에 따라 손쉽게 확장 가능한 구조로 설계했으며, 추후 `indexedDB`, `sessionStorage` 등으로의 확장도 용이합니다.
- 최초 렌더 시 초기 데이터는 한 번만 주입되며, 이후에는 해당 저장소를 기준으로 CRUD가 동작합니다.
