import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HelloWorld from "@/components/HelloWorld";
import Router1 from "@/components/Router1";
import Router2 from "@/components/Router2";
import Router3 from "@/components/Router3";
import Router4 from "@/components/Router4";
import Router4a from "@/components/route4/router4-1";
import Router4b from "@/components/route4/router4-2";

/*配置路由*/
const routes=[
    {
        path:"/demo4",
        component:Router4,
        children:[
            {
                path:"demo4-1",
                component:Router4a
            },
            {
                path:"demo4-2",
                component:Router4b
            }
        ]
    },//name属性是给路由起别名，方便用js的方式去跳转
    {
        path:"/demo3/:id",
        component:Router3,
        name:'route3'

    },
    {
        path:"/demo1/:id",
        component:Router1,
        props:true

    },
    {
        path:"/demo2",
        component:Router2
    },
    {
        path:"/helloWorld",
        component:HelloWorld
    }
]

/*实例化路由*/
const router = new Router({
    mode:"history",   //模式修改
    routes // （简写）相当于 routes: routes
})

/*导出路由模块*/
export default router