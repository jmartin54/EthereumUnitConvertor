import React from "react";
import "../Styles/Button.css";

type ButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
