import { useRouteError } from "react-router";
const Error = () =>{
    const err = useRouteError();
    return <h1>Opps something went wrong !! {err.status} {err.statusText}</h1>
}

export default Error;