import asyncComponent from "../helpers/AsyncFunc";

const routes = [
    {
        path: "/sales/registers",
        exact: true,
        title: 'Sales',
        isMenu: true,
        component: asyncComponent(() => import("../containers/Sales/Registers"))
    },
    {
        path: "/sales/registers1",
        exact: true,
        title: 'Sales 1',
        isMenu: true,
        component: asyncComponent(() => import("../containers/Sales/Registers1"))
    },
    {
        path: "/sales/registers2",
        exact: true,
        title: 'Sales 2',
        isMenu: true,
        component: asyncComponent(() => import("../containers/Sales/Registers2"))
    },
    {
        path: "/sales/registers3",
        exact: true,
        title: 'Sales 3',
        isMenu: true,
        component: asyncComponent(() => import("../containers/Sales/Registers3"))
    },
];

export default routes;
