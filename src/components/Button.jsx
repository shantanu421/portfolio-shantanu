/**
 * Code-styled button. Renders an <a> when `href` is given, otherwise a <button>.
 * variant: "primary" (green, for the main action) | "ghost" (neutral)
 */
const Button = ({
  name,
  children,
  href,
  variant = "primary",
  size,
  isBeam = false,
  icon,
  containerClass = "",
  ...props
}) => {
  const className = [
    "btn",
    variant === "ghost" ? "btn-ghost" : "btn-primary",
    size === "sm" && "btn-sm",
    containerClass,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {isBeam && (
        <span className="relative flex h-2.5 w-2.5">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {icon && <img src={icon} alt="" className="h-4 w-4 opacity-80" />}
      {name ?? children}
    </>
  );

  if (href) {
    const external = /^https?:/.test(href) || href.endsWith(".pdf");
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={className} {...props}>
      {content}
    </button>
  );
};

export default Button;
