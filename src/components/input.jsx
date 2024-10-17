
const Input = ({ className, placeholder, variant = 'input', ...rest }) => {
  return (
    <div className='flex flex-col gap-2'>
      {variant === 'input' ? (
        <input
          placeholder={placeholder} 
          className={`w-full py-2 px-4 border-4 border-[#9E9E9E] rounded-lg ${className}`}
          {...rest}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          className={`w-full py-2 px-4 border-4 border-[#9E9E9E] rounded-lg ${className}`}
          {...rest}
        />
      )}
    </div>
  );
};

export default Input;

