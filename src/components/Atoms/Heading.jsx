export default function Heading({ children, level = 1, className = "" }) {
  return (
    <>
      {level === 1 && (
        <h1 className={`text-3xl md:text-3xl font-medium ${className}`}>
          {children}
        </h1>
      )}
      {level === 2 && (
        <h2 className={`text-2xl md:text-4xl font-medium ${className}`}>
          {children}
        </h2>
      )}
      {level === 3 && (
        <h3 className={`text-xl md:text-3xl font-medium ${className}`}>
          {children}
        </h3>
      )}
      {level === 4 && (
        <h4 className={`text-lg md:text-2xl font-medium ${className}`}>
          {children}
        </h4>
      )}
      {level === 5 && (
        <h5 className={`text-md md:text-xl ${className}`}>{children}</h5>
      )}
      {level === 6 && (
        <h6 className={`text-base md:text-lg ${className}`}>{children}</h6>
      )}
      {level < 1 || level > 6 ? (
        <span className={className}>{children}</span>
      ) : null}
    </>
  );
}
