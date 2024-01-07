"use client";

import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  label?: string;
  defaultValue?: SelectOptions;
  placeholder?: string;
};

const FormSelect = ({
  name,
  size,
  value,
  label,
  options,
  defaultValue,
  placeholder,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}

      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelect;
