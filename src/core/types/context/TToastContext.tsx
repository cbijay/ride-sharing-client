import {
  ToastMessageType,
  Truncate,
  TToast,
} from "core/types/components/toast/TToast";

export type TToastContext = {
  data: Array<TToast>;

  add(
    message: string,
    type: ToastMessageType,
    lifetime?: number,
    truncate?: Truncate
  ): void;

  remove(id: string): void;
};
