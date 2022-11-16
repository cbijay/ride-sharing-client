import classnames from "classnames";
import ToastMessage from "core/components/toast/message/ToastMessage";
import { ToastContext } from "core/context/ToastContext";
import { useContext } from "react";

export type ToastContainerProps = {
  variant?: keyof typeof VARIANTS;
};

export const VARIANTS = {
  top_left: {
    style: "top-0 left-0",
  },
  top_right: {
    style: "top-0 right-0",
  },
  bottom_right: {
    style: "bottom-0 right-0",
  },
  bottom_left: {
    style: "bottom-0 left-0",
  },
  top_middle: {
    style: "top-0 left-1/2 -translate-x-1/2 transform",
  },
  bottom_middle: {
    style: "bottom-0 left-1/2 -translate-x-1/2 transform",
  },
  undefined: {
    style: "top-0 right-0",
  },
};

export default function ToastContainer({
  variant = "top_right",
}: ToastContainerProps) {
  const context = useContext(ToastContext);

  const Var = VARIANTS[variant] || VARIANTS.top_right;

  function handleRemove(id: string) {
    context?.remove(id);
  }

  return (
    <div
      className={classnames(
        Var.style,
        "fixed z-50 w-full md:max-w-[400px]",
        "pointer-events-none max-h-screen overflow-hidden py-0.5 px-2"
      )}
    >
      <div
        className={classnames(
          "fade pointer-events-none mr-8 w-full flex-1 flex-col justify-end"
        )}
      >
        {context?.data.map((toast) => {
          return (
            <div
              key={toast.id}
              className={classnames(
                "flex w-full",
                "pointer-events-auto transform transition-all duration-300"
              )}
            >
              <ToastMessage
                id={toast.id}
                message={toast.message}
                type={toast.type}
                header={toast.header}
                icon={toast.icon}
                truncate={toast.truncate}
                onRemove={handleRemove}
                lifetime={toast.lifetime}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
