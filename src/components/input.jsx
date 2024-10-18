const Input = ({ className, placeholder, variant = 'input', options = [], ...rest }) => {
  return (
    <div className="flex flex-col gap-2">
      {variant === 'input' ? (
        <input
          placeholder={placeholder}
          className={`w-full py-2 px-4 border-4 border-[#9083D5] rounded-lg outline-none ${className}`}
          {...rest}
        />
      ) : variant === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          className={`w-full py-2 px-4 border-4 border-[#9083D5] rounded-lg outline-none ${className}`}
          {...rest}
        />
      ) : variant === 'select' ? (
        <select
          className={`w-full py-2 px-4 border-4 border-[#9083D5] rounded-lg outline-none ${className}`}
          {...rest}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

export default Input;
