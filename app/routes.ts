import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home/HomePage.tsx"),
  route("products", "pages/products/ProductListPage.tsx"),
  route("products/:id", "pages/products/ProductDetailsPage.tsx"),
  route("about", "pages/about/AboutPage.tsx"),
  route("checkout", "pages/checkout/CheckoutPage.tsx"),
  route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;
