// "use client";

// import * as React from "react";
// import { NextUIProvider } from "@nextui-org/system";
// import { useRouter } from "next/navigation";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { ThemeProviderProps } from "next-themes/dist/types";

// export interface ProvidersProps {
//   children: React.ReactNode;
//   themeProps?: ThemeProviderProps;
// }

// export function Providers({ children, themeProps }: ProvidersProps) {
//   const router = useRouter();

//   return (
//     <NextUIProvider navigate={router.push}>
//       <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
//     </NextUIProvider>
//   );
// }


"use client"
import { store } from "@/lib/redux/store";
import { Provider } from "react-redux";


export const Providers = (props: React.PropsWithChildren) => {
    return <Provider store={store}>{props.children}</Provider>;
};
