import type { ReactNode } from "react";

import { ThemeProvider } from "@/lib/components/theme-provider";

import Footer from "./Footer";
import Header from "./Header";
import { MantineProvider } from "@mantine/core";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <MantineProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="wrapper">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </MantineProvider>
  );
};

export default Layout;
