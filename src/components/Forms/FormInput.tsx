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
      <label className="block text-gray-700 font-semibold text-[15px] pb-2">
        {label ? label : null}
      </label>

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input 
         
            type={type}
            size={"large"}
            // className="w-1/2 py-4 placeholder:m-5 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            placeholder={placeholder}
            {...field}
            value={value ? value : field.value || ""}
          />
        )}
      />
    </>
  );
};

export default FormInput;
