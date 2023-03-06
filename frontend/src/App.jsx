import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { createTheme } from "@mui/material";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Pages
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
// @mui
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: darkMode ? "#222" : "#fff",
      },
      divider: "rgba(214,214,214,0.32)",
    },
  });

  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
