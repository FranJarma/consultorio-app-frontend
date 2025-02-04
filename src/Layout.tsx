import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { Layout as RALayout, CheckForApplicationUpdate, AppBar } from "react-admin";
import { Logo } from "./common/components/ui/Logo";

const MyAppBar = () => (
  <AppBar>
      <Box component="span" flex={1} />
      <Logo />
      <Box component="span" flex={1} />
  </AppBar>
);

export const Layout = ({ children }: { children: ReactNode }) => (
  <RALayout appBar={MyAppBar}>
    {children}
    <CheckForApplicationUpdate />
  </RALayout>
);
