type InputFieldProps = {
    label: string;
    type: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
      label,
      type,
      name,
      value,
      placeholder,
      onChange,
  }) => (
    <fieldset className="flex flex-col gap-2">
        <label className="text-xs text-[#333333]">{label}</label>
        <input
            className="text-[#03022D] w-full bg-white text-center p-2 outline-none border-[1px] border-[#D9D9D9] rounded-md"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
        />
    </fieldset>
);
