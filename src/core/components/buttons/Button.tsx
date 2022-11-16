import "core/styles/components/button/button.scss";
import { TButton } from "core/types/components/button/TButton";
import { FC } from "react";

const Button: FC<TButton> = ({ title, className, onClick }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
