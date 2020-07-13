import React, { ChangeEvent } from 'react';

interface IProps {
  name: string;
  label: string;
  value: string | number;
  options: any[];
  renderOptions: Function;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const FormSelect: React.FC<IProps> = ({
  name,
  label,
  value,
  options,
  renderOptions,
  onChange,
}) => {
  return (
    <div className='form-field'>
      <label>{label}</label>
      <span className='form-field__required'>*</span>
      <select value={value} name={name} onChange={onChange}>
        <option value='' disabled>
          Select
        </option>
        {renderOptions(options)}
      </select>
    </div>
  );
};
