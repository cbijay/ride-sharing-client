import { TAvatar } from "core/types/components/avatar/TAvatar";
import { FC } from "react";

const Avatar: FC<TAvatar> = ({ title }) => {
  return (
    <div className="w-14 h-14 relative flex justify-center items-center rounded-full bg-primary text-xl uppercase">
      {title}
    </div>
  );
};

export default Avatar;
