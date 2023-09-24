import { Route } from 'react-router-dom'
import { lazy } from 'react'

const routes = [
    {
        path: "",
        element: lazy(() => import("../Templates/HomeTemplate")),
        nested: [
            {
                path: "",
                element: lazy(() => import("../pages/Home")),
            },
            {
                path: "user-info",
                element: lazy(() => import("../pages/UserInfo")),
            },
            {
                path: "roombycity/:id",
                element: lazy(() => import("../pages/RoomByCity"))
            },
            {
                path: "roomdetail/:id",
                element: lazy(() => import("../pages/RoomDetail"))
            },
            {
                path: "login-page",
                element: lazy(() => import("../pages/Login"))
            },
            {
                path: "register-page",
                element: lazy(() => import("../pages/Register"))
            },
        ]
    },
    {
        path: "admin",
        element: lazy(() => import("../Templates/AdminTemplate")),
        nested: [
            {
                path: "dashboard",
                element: lazy(() => import("../pages/Admin/Dashboard"))
            },
            {
                path: "manage-rooms",
                element: lazy(() => import("../pages/Admin/RoomManagement"))
            },
            {
                path: "manage-locations",
                element: lazy(() => import("../pages/Admin/LocationManagement")),
            },
            {
                path: "manage-comments",
                element: lazy(() => import("../pages/Admin/CommentManagement"))
            },
            {
                path: "admin-info/:id",
                element: lazy(() => import("../pages/Admin/AdminInfo")),
            },
            {
                path: "manage-users",
                element: lazy(() => import("../pages/Admin/UserManagement")),
            },
        ]
    },
    {
        path: "auth",
        element: lazy(() => import("../pages/Auth"))
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