"use client";
import { IInput } from "@/interface/type";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({
  name,
  placeholder,
  size,
  id,
  type,
  validate,
  value,
  label,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
      <label className="block text-gray-700 font-semibold text-[15px]">
        {label ? label : null}
      </label>

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
         
            <input
              type={type || "text"}
              // size={size}
              className="w-[90%] px-4 py-3 rounded-lg mb-4 bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              placeholder={placeholder || " sdf"}
              {...field}
              value={value ? value : field.value}
            />
         
        )}
      />
    </>
  );
};

export default FormInput;
