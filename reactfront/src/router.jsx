import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import ShowCotizaciones from "./components/ShowCotizaciones";
import CreateCotizacion from "./components/CreateCotizacion";
import EditCotizacion from "./components/EditCotizacion";
import VentasMenu from "./components/VentasMenu";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/ventas/',
                element: <VentasMenu />,
            },
            {
                path: 'show',
                element: <ShowCotizaciones />
            },
            {
                path: 'edit/:id',
                element: <EditCotizacion />
            },
            {
                path: 'create',
                element: <CreateCotizacion />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;