"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import ScrollToTopBtn from "@/components/button/scrollToTopBtn";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        {children}
        <ProgressBar
          height="4px"
          color="#755543"
          options={{ showSpinner: false }}
          shallowRouting={true}
        />
        <ScrollToTopBtn/>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
