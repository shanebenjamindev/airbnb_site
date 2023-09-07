import { Route } from 'react-router-dom'
import { lazy } from 'react'

const routes = [
    {
        path: "",
        element: lazy(() => import("../Templates/HomeTemplate")),
        nested: [
            {
                path: "",
                element: lazy(() => import("../pages/HomePage")),
            },
            {
                path: "roombycity/:id",
                element: lazy(() => import("../pages/RoomByCityPage"))
            },
            {
                path: "roomdetail/:id",
                element: lazy(() => import("../pages/RoomDetail"))
            }
        ]
    },
    {
        path: "login-page",
        element: lazy(()=> import ("../pages/LoginPage"))
    },
    {
        path: "register-page",
        element: lazy(()=> import ("../pages/RegisterPage"))
    },
    {
        path: "admin",
        element: lazy(()=> import ("../Templates/AdminTemplate"))
    }
]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map((item) => {
                        return <Route key={item.path} path={item.path} element={< item.element />} />
                    })}
                </Route>
            )
        } else {
            return <Route key={route.path} path={route.path} element={< route.element />} />
        }
    })
}
export default renderRoutes;