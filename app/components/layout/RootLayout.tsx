import { PropsWithChildren } from "react";
import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import { CartDrawer } from "../cart/CartDrawer/CartDrawer";
import { Header } from "./Header/Header";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <CartDrawer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default RootLayout;