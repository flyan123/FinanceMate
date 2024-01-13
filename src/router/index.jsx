// 配置懒加载lazy
import React,{lazy} from "react";
// Navigate重定向组件
import { Navigate } from "react-router-dom";

const Home =lazy(()=>import("../pages/Home"))
const Part1 =lazy(()=>import("../pages/Part/part1"))
const Part2 =lazy(()=>import("../pages/Part/part2"))

// 封装函数
const withLoadingComponent=(comp)=>(
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>   
)
// 新路由写法
const routes = [
    {
        path:'/',
        element:<Navigate to='/part1' />
    },
    {
        path:'/',
        element:<Home />,
        children:[
        {
            path:'/part1',
            element:withLoadingComponent(<Part1 />)
        }, {
            path:'/part2',
            element:withLoadingComponent(<Part2 />)
        },
    ]   
    }
]

export default routes