import { Link, useRouteError } from "react-router-dom"

type RouterError = {
    status: number,
    statusText: string,
    
}

export function PageError(){

    const error = useRouteError() as RouterError;

    return (
        <>
            <h1>{error.status}</h1>
            <p>{error.statusText}</p>
            <Link to="/">Voltar</Link>
        </>
    )
}