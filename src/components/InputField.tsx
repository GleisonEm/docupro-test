import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false
}) => {
  return (
    <label className="flex flex-col min-w-40 flex-1">
      <span className="text-[#111418] text-sm font-medium leading-normal pb-1">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="form-input flex h-10 w-full min-w-0 flex-1 rounded-lg border border-[#d5d8dc] bg-white px-3 py-2 text-sm text-[#111418] placeholder:text-[#98a2af] focus:border-[#1466b8] focus:ring-1 focus:ring-[#1466b8]"
      />
    </label>
  );
};