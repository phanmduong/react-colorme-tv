import asyncComponent from "../helpers/AsyncFunc";

const routes = [
    {
        path: "/class/students",
        exact: true,
        title: 'Sales',
        isMenu: true,
        component: asyncComponent(() => import("../containers/Class"))
    },
    // {
    //     path: "/class/students1",
    //     exact: true,
    //     title: 'Sales 1',
    //     isMenu: true,
    //     component: asyncComponent(() => import("../containers/Sales/Registers1"))
    // },

];

export default routes;
