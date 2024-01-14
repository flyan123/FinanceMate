// 配置懒加载lazy
import React,{lazy} from "react";
// Navigate重定向组件
import { Navigate } from "react-router-dom";

const Home =lazy(()=>import("../pages/Home"))
const Part1 =lazy(()=>import("../pages/Part/part1"))
const Part2 =lazy(()=>import("../pages/Part/part2"))
const Part301 =lazy(()=>import("../pages/Part/Part3/part301"))
const Part302 =lazy(()=>import("../pages/Part/Part3/part302"))
const Part303 =lazy(()=>import("../pages/Part/Part3/part303"))
const Part401 =lazy(()=>import("../pages/Part/Part4/part401"))
const Part402 =lazy(()=>import("../pages/Part/Part4/part402"))
const Part5 =lazy(()=>import("../pages/Part/part5"))

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
        // 目录下的路由
        children:[
        {
            path:'/part1',
            element:withLoadingComponent(<Part1 />)
        }, {
            path:'/part2',
            element:withLoadingComponent(<Part2 />)
        },{
            path:'/part3/part301',
            element:withLoadingComponent(<Part301 />)
        },{
            path:'/part3/part302',
            element:withLoadingComponent(<Part302 />)
        },{
            path:'/part3/part303',
            element:withLoadingComponent(<Part303/>)
        },{
            path:'/part4/part401',
            element:withLoadingComponent(<Part401/>)
        },{
            path:'/part4/part402',
            element:withLoadingComponent(<Part402/>)
        },{
            path:'/part5',
            element:withLoadingComponent(<Part5/>)
        },
    ]
    },
    {
        path:'*',
        element:<Navigate to='/part1' />
    }
]

export default routes