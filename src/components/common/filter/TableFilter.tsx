import { Checkbox, CheckboxOptionType } from 'antd';
import { css } from '@emotion/react';
import { useState } from 'react';

type CustomTableFilterProps<T extends string | number | boolean> = {
  options: CheckboxOptionType[];
  selectedKeys: T[];
  onChange: (selected: T[]) => void;
};

const CustomTableFilter = <T extends string | number>({
  options,
  selectedKeys,
  onChange,
}: CustomTableFilterProps<T>) => {
  const [checkedValues, setCheckedValues] = useState<T[]>(selectedKeys);

  const handleChange = (checkedValue: T, checked: boolean) => {
    const newValues = checked
      ? [...checkedValues, checkedValue]
      : checkedValues.filter((v) => v !== checkedValue);

    setCheckedValues(newValues);
    onChange(newValues);
  };

  return (
    <div
      css={css`
        background: white;
        border-radius: 10px;
        width: 150px;
        padding: 8px;
        box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
          0px 3px 6px -4px rgba(0, 0, 0, 0.12),
          0px 6px 16px 0px rgba(0, 0, 0, 0.08);
        display: flex;
        flex-direction: column;
        gap: 8px;
      `}
    >
      {options.map((option) => (
        <Checkbox
          key={String(option.value)}
          checked={checkedValues.includes(option.value as T)}
          onChange={(e) => handleChange(option.value as T, e.target.checked)}
          css={css`
            border-radius: 6px;
            padding: 5px 12px;
            height: 32px;
          `}
        >
          {option.label}
        </Checkbox>
      ))}
    </div>
  );
};

export default CustomTableFilter;
