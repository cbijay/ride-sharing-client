import { TWelcomeText } from "core/types/components/welcome_text/TWelcomeText";
import { FC } from "react";

const WelcomeText: FC<TWelcomeText> = ({ title }) => {
  return (
    <h1 className="text-gray-900 text-xl mb-2 font-bold title-font">{title}</h1>
  );
};

export default WelcomeText;
