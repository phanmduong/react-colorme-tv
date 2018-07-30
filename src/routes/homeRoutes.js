import asyncComponent from "../helpers/AsyncFunc";

export default [
    {
        path: "/",
        exact: true,
        title: 'Chọn loại hiển thị',
        component: asyncComponent(() => import("../containers/Home"))
    }
];
