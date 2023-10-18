import AdminPanel from '../pages/AdminPanel'

export const authRoutes = [
    {
        path: '/admin',
        Component: AdminPanel
    }
]

export const publicRoutes = [
    {
        path: '/main',
        Component: Main
    }
]