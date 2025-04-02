export const SELECT_OPTION = [
  { value: '개발자', label: '개발자' },
  { value: '디자이너', label: '디자이너' },
  { value: 'PO', label: 'PO' },
] as const;

export type OptionValue = (typeof SELECT_OPTION)[number]['value'];
