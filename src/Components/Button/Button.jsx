const Button = ({className,title="click",icon}) => {
  return <button className={className}>{icon}{title}</button>;
};

export default Button;
