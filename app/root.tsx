import { Outlet } from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import PageErrorBoundary from "./components/layout/PageErrorBoundary";
import RootLayout from "./components/layout/RootLayout";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}

export function ErrorBoundary({ error, params }: Route.ErrorBoundaryProps) {
  return <PageErrorBoundary error={error} params={params} />;
}

export default function App() {
  return <Outlet />;
}
