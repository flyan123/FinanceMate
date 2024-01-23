import React from "react"
import part302style from './part302.module.less'

import { Button, Flex } from 'antd';

import { Input, Space } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Part302 = () => {
    return (
        <div>
            <div className={part302style.all}>
                <div className={part302style.searchbox}>

                    <Space direction="vertical">
                        <Search
                            placeholder="请输入内容"
                            onSearch={onSearch}
                            style={{
                                width: 500,
                            }}
                        />
                    </Space>
                    <div className={part302style.searchbut}>
                        <Flex gap="small" wrap="wrap" >
                            <Button type="primary">添加影院</Button>

                        </Flex>
                    </div>
                </div>
                {/* 表格 */}
                <div className={part302style.tables} >
                    <table border="1" >
                        <thead>
                            <tr>
                                <th style={{width:'50px'}} > </th>
                                <th>影院名</th>
                                <th style={{width:'150px'}}> 联系电话</th>
                                <th>详细地址</th>
                                <th style={{width:'150px'}}>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>中影4KMAX国际影城(西丽店)</td>
                                <td>755-211918</td>
                                <td>南山区留仙大道2188号悦方广场楼(留仙洞地铁站B出口)</td>
                                <td>
                                    <button><EditTwoTone /></button>
                                    <button><DeleteTwoTone /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>中影星美国际影城(南山云城店)</td>
                                <td>0755-86522580</td>
                                <td>南山区西丽街道留仙洞打石二路1号万科云城5层L 5-015M-02号</td>
                                <td>
                                    <button><EditTwoTone /></button>
                                    <button><DeleteTwoTone /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>中影红树林国际影城(前海店)</td>
                                <td>755-865616</td>
                                <td>南山区桂湾三路龙海商业广场北区13-17号铺</td>
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
export default Part302