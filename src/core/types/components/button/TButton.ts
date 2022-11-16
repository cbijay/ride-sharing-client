import { MouseEventHandler } from "react";

export type TButton = {
  title: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
