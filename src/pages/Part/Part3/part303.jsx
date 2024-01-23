import React from "react"
import part303style from './part303.module.less'

import { Button, Flex } from 'antd';

import { Input, Space } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Part303 = () => {
    return (
        <div>
            <div className={part303style.all}>
                <div className={part303style.searchbox}>

                    <Space direction="vertical">
                        <Search
                            placeholder="请输入内容"
                            onSearch={onSearch}
                            style={{
                                width: 500,
                            }}
                        />
                    </Space>
                    <div className={part303style.searchbut}>
                        <Flex gap="small" wrap="wrap" >
                            <Button type="primary">添加影厅</Button>

                        </Flex>
                    </div>
                </div>
                {/* 表格 */}
                <div className={part303style.tables} >
                    <table border="1" >
                        <thead>
                            <tr>
                                <th style={{width:'50px'}}> </th>
                                <th>影院名</th>
                                <th>影院电话</th>
                                <th>影厅名</th>
                                <th style={{width:'100px'}}>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>中影4KMAX国际影城(西丽店)</td>
                                <td>55-58111</td>
                                <td>1号厅</td>
                                <td>
                                    <button><EditTwoTone /></button>
                                    <button><DeleteTwoTone /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>中影4KMAX国际影城(西丽吉)</td>
                                <td>55-581111</td>
                                <td>2号厅</td>
                                <td>
                                    <button><EditTwoTone /></button>
                                    <button><DeleteTwoTone /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>中影4KMAX国际影城(西丽店)</td>
                                <td>55-58111</td>
                                <td>3号厅</td>
                                <td>
                                    <button><EditTwoTone /></button>
                                    <button><DeleteTwoTone /></button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>


            </div>

        </div>
    )
}
export default Part303