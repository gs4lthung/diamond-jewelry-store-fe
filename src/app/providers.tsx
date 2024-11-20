"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import ScrollToTopBtn from "@/components/button/scrollToTopBtn";
import { Provider as ReduxProvider } from "react-redux"; // Import Redux Provider
import store from "@/lib/redux/store";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <ReduxProvider store={store}>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>
          {children}
          <ProgressBar
            height="4px"
            color="#755543"
            options={{ showSpinner: false }}
            shallowRouting={true}
          />
          <ScrollToTopBtn />
        </NextThemesProvider>
      </NextUIProvider>
    </ReduxProvider>
  );
}
