import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import ShowCotizaciones from "./components/ShowCotizaciones";
import CreateCotizacion from "./components/CreateCotizacion";
import EditCotizacion from "./components/EditCotizacion";
import VentasMenu from "./components/VentasMenu";
import NotFound from "./components/NotFound";
import InventariosMenu from "./components/InventariosMenu";
import ShowVentas from "./components/ShowVentas";
import EditVentas from "./components/EditVentas";
import CreateVentas from "./components/CreateVentas";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/ventas',
                element: <VentasMenu />,
            },
            {
                path: '/inventarios',
                element: <InventariosMenu />,
            },
            {
                path: '/show',
                element: <ShowCotizaciones />
            },
            {
                path: '/edit/:id',
                element: <EditCotizacion />
            },
            {
                path: '/create',
                element: <CreateCotizacion />
            },
            {
                path: '/showVentas',
                element: <ShowVentas />
            },
            {
                path: '/editVenta/:id',
                element: <EditVentas />
            },
            {
                path: '/createVenta',
                element: <CreateVentas />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;