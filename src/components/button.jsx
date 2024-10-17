export const Button = ({ className, children, href, bgColor, ...rest }) => {
    return (
      <button
       
        className={`rounded-md py-2 px-4 shadow-lg ${className}`}
        style={{
          background: `linear-gradient(180deg, ${bgColor}, ${bgColor}99)`,
        }}
        {...rest}
      >
        <a href={href}>{children}</a>
      </button>
    );
  };
  
  
