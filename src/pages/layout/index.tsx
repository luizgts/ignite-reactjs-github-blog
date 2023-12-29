import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";

export function Layout() {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Carregando ...</div>}>
                <Outlet />
            </Suspense>
        </>
    )
}