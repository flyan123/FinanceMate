 import React from "react"
import part303style from './part303.module.less'
 
 import { Button, Flex } from 'antd';

import { Input, Space } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

 const Part303 =()=>{
    return(
        <div>
                  <div className={part303style.all}>
            <div className={part303style.searchbox}>

                <Space direction="vertical">
                    <Search
                        placeholder="请输入账号进行查询"
                        onSearch={onSearch}
                        style={{
                            width: 500,
                        }}
                    />
                </Space>
                <div className={part303style.searchbut}>
                    <Flex gap="small" wrap="wrap" >
                        <Button type="primary">添加用户</Button>

                    </Flex>
                </div>
            </div>
            {/* 表格 */}
            <div className={part303style.tables} >
                <table border="1" >
                    <thead>
                        <tr>
                            <th>头像</th>
                            <th>账号</th>
                            <th>用户名</th>
                            <th>性别</th>
                            <th>生日</th>
                            <th>电话</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button>更新图片</button></td>
                            <td>231321</td>
                            <td>测试用户1</td>
                            <td>男</td>
                            <td>2001.2.1</td>
                            <td>1245456456</td>
                            <td>
                                <button><EditTwoTone /></button>
                                <button><DeleteTwoTone /></button>
                            </td>
                        </tr>
                        <tr>
                            <td><button>更新图片</button></td>
                            <td>231321</td>
                            <td>测试用户1</td>
                            <td>男</td>
                            <td>2001.2.1</td>
                            <td>1245456456</td>
                            <td>
                                <button><EditTwoTone /></button>
                                <button><DeleteTwoTone /></button>
                            </td>
                        </tr>
                        <tr>
                            <td><button>更新图片</button></td>
                            <td>231321</td>
                            <td>测试用户1</td>
                            <td>男</td>
                            <td>2001.2.1</td>
                            <td>1245456456</td>
                            <td>
                                <button><EditTwoTone /></button>
                                <button><DeleteTwoTone /></button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>


        </div>

    )
        </div>
    )
 }
 export default Part303