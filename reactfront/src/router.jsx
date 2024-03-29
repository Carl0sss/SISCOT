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
import CreateMateriasPrimas from "./components/CreateMateriasPrimas";
import CreatePedido from "./components/CreatePedido";
import CreateProduct from "./components/CreateProduct";
import EditMateriasPrimas from "./components/EditMateriasPrimas";
import EditPedido from "./components/EditPedido";
import EditProduct from "./components/EditProduct";
import ShowMateriasPrimas from "./components/ShowMateriasPrimas";
import ShowPedidos from "./components/ShowPedidos";
import ShowProduct from "./components/ShowProduct";
import Dashboard from "./components/Dashboard";
import ShowProcesoPedidos from "./components/ShowProcesoPedidos";
import DetailsProcesoPedido from "./components/DetailsProcesoPedido";
import CreateRegistroDiario from "./components/CreateRegistroDiario";
import EditRegistroDiario from "./components/EditRegistroDiario";
import ShowRegistroDiario from "./components/ShowRegistrosDiarios";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />,
            },
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
            },
            {
                path: '/showMateriasPrimas',
                element: <ShowMateriasPrimas />
            },
            {
                path: '/editMateriasPrima/:id',
                element: <EditMateriasPrimas />
            },
            {
                path: '/createMateriasPrima',
                element: <CreateMateriasPrimas />
            },
            {
                path: '/showPedidos',
                element: <ShowPedidos />
            },
            {
                path: '/editPedido/:id',
                element: <EditPedido />
            },
            {
                path: '/createPedido',
                element: <CreatePedido />
            },
            {
                path: '/showProductos',
                element: <ShowProduct />
            },
            {
                path: '/editProducto/:id',
                element: <EditProduct />
            },
            {
                path: '/createProducto',
                element: <CreateProduct />
            },
            {
                path: '/showProcesoPedidos',
                element: <ShowProcesoPedidos />
            },
            {
                path: '/DetailsProcesoPedido/:id',
                element: <DetailsProcesoPedido />
            },{
                path: '/createRegistro',
                element: <CreateRegistroDiario />
            },{
                path: '/editRegistro/:id',
                element: <EditRegistroDiario />
            },{
                path: '/showRegistros',
                element: <ShowRegistroDiario />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;