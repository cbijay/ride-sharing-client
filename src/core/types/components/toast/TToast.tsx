import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { VARIANTS } from "core/components/toast/container/ToastContainer";

export type Truncate =
  | "truncate-1-lines"
  | "truncate-2-lines"
  | "truncate-3-lines";

export type TToastMessage = {
  id: string;
  lifetime?: number;
  variant?: keyof typeof VARIANTS | undefined;
  onRemove?: (id: string) => void;
  truncate?: Truncate;
} & TToast;

export type ToastMessageType = "Info" | "Success" | "Warning" | "Error";

export type TToast = {
  id: string;
  lifetime: number;
  message: string | React.ReactNode;
  type?: ToastMessageType;
  truncate?: Truncate;
  icon?: IconProp;
  header?: string;
};
