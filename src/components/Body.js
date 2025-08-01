import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
            errorElement: <Error />
        },
        {
            path: 'browse',
            element: <Browse />
        }
    ])


    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}


export default Body;