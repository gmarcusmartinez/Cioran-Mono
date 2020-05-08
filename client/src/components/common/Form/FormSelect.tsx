import React, { ChangeEvent } from 'react';

interface FormSelectProps {
  name: string;
  label: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  renderOptions: Function;
  options: any[];
}

export const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  value,
  onChange,
  renderOptions,
  options,
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
