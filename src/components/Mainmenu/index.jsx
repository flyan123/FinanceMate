import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'

import { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    VideoCameraAddOutlined,
    ToolOutlined,
    UserOutlined,
} from '@ant-design/icons';

// 登录请求到数据之后，就可以跟items这个数组进行匹配
const items = [
    {
        label: '数据显示',
        key: '/part1',
        icon: <DesktopOutlined />
    }, {
        label: '用户管理',
        key: '/part2',
        icon: <UserOutlined />
    }, {
        label: '内容管理',
        key: 'part3',
        icon: <VideoCameraAddOutlined />,
        children: [
            {
                label: '电影管理',
                key: '/part3/part301',
            }, {
                label: '影院管理',
                key: '/part3/part302',
            }, {
                label: '影厅管理',
                key: '/part3/part303',
            },
        ]
    }, {
        label: '其余管理',
        key: 'part4',
        icon: <ToolOutlined />,
        children: [
            {
                label: '评论管理',
                key: '/part4/part401',
            }, {
                label: '订单管理',
                key: '/part4/part402',
            }
        ]
    }, {
        label: '电影排片',
        key: '/part5',
        icon: <FileOutlined />
    }
]
const Mainmenu = () => {

    const navigateTo = useNavigate()
    const currentRouter = useLocation()
    // console.log(currentRouter.pathname)
    const menuClick = (e) => {
        //   console.log('点击了菜单栏', e.key)
        navigateTo(e.key)
    }

    // 目的：让展开栏刷新自动展开
    //拿着currentRoute.pathname跟 items数组的每项的children的key值进行对比， 如果找到了 相等了，就要他上一 级的key
    //这个key给到openKeys数组的元素，作为初始值

        let firstOpenkey =' '
        // 在这里对比
        function findKey(obj){
            return obj.key === currentRouter.pathname
        }

       for (let i=0;i<items.length;i++){

        if(items[i]['children'] && items[i]['children'].length > 0 && items[i]['children'].find(findKey)) {
             firstOpenkey=items[i].key
             console.log(firstOpenkey)
            break 
        }
       }


    const [openKeys, setOpenKeys] = useState([firstOpenkey]);

    const handleonOpenChange = (keys) => {
        //   console.log(keys)
        setOpenKeys([keys[keys.length - 1]])
    }
    return (
        <div>
            <Menu
                theme="dark"
                defaultSelectedKeys={[currentRouter.pathname]}
                mode="inline"
                items={items}
                onClick={menuClick}
                // 莫项菜单栏展开和回收的事件 
                onOpenChange={handleonOpenChange}
                // 当前菜单展开项的key数组
                openKeys={openKeys}
            />
        </div>
    )


}

export default Mainmenu