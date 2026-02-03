import React, { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import cartReducer from "~/store/product/productCart/productCartSlice";
import productsReducer from "~/store/product/productList/productListSlice";
import productDetailsReducer from "~/store/product/productDetails/productDetailsSlice";

// Cria uma store limpa para cada teste
export function setupStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
      productDetails: productDetailsReducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Desabilita checks para testes mais rápidos
      }),
  });
}

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: any;
  store?: ReturnType<typeof setupStore>;
  route?: string;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    route = "/",
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>) {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

// Re-export everything from RTL
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
