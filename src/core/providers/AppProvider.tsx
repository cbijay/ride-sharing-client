import { QueryClientProvider } from "@tanstack/react-query";
import useAppProvider from "core/hooks/provider/useAppProvider";
import { ReactNode } from "react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastProvider } from "core/context/ToastContext";
import { AuthProvider } from "features/auth/context/provider/authProvider";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const { queryClient } = useAppProvider();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default AppProvider;
