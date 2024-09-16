import React from "react";

interface FilterInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const FilterInput: React.FC<FilterInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
    />
  );
};

export default FilterInput;
