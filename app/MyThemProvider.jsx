"use client";

import { ThemeProvider } from "@material-tailwind/react";

export default function MyThemeProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
