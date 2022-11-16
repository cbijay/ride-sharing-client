import ToastContainer from "core/components/toast/container/ToastContainer";
import {
  ToastMessageType,
  Truncate,
  TToast,
} from "core/types/components/toast/TToast";

import { TToastContext } from "core/types/context/TToastContext";
import { TToastProvider } from "core/types/context/TToastProvider";

import { uuidv4 } from "core/utils/uuid";
import React, { useCallback, useContext, useState } from "react";

export const ToastContext = React.createContext<TToastContext | undefined>(
  undefined
);

export const useToast = () => useContext(ToastContext);

const DEFAULT_INTERVAL = 2500;

export const ToastProvider = ({ children, variant }: TToastProvider) => {
  const [data, setData] = useState<Array<TToast>>([]);

  const Add = useCallback(
    (
      message: string,
      type: ToastMessageType,
      lifetime?: number,
      truncate?: Truncate
    ) => {
      if (message) {
        const new_item: TToast = {
          id: uuidv4(),
          message: message,
          type: type,
          lifetime: lifetime ? lifetime : DEFAULT_INTERVAL,
          truncate: truncate,
        };

        setData((prevState) => [...prevState, new_item]);
      }
    },
    [setData]
  );

  const value: any = useCallback(() => {
    return {
      data: data,
      add: Add,

      async remove(id: string) {
        setData((prevState) => prevState.filter((e) => e.id !== id));
      },
    };
  }, [data, setData, Add]);

  return (
    <ToastContext.Provider value={value()}>
      <ToastContainer variant={variant} />
      {children}
    </ToastContext.Provider>
  );
};
