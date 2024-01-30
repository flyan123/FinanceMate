import React from "react"
import part5style from './part5.module.less'

import { Button, Flex } from 'antd';

import { Input, Space } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value); 

const Part5 =()=>{
   return(
       <div>
              <div className={part5style.all}>
            <div className={part5style.searchbox}>

                <Space direction="vertical">
                    <Search
                        placeholder="请输入内容"
                        onSearch={onSearch}
                        style={{
                            width: 500,
                        }}
                    />
                </Space>
                <div className={part5style.searchbut}>
                    <Flex gap="small" wrap="wrap" >
                        <Button type="primary">电影排片</Button>

                    </Flex>
                </div>
            </div>
            {/* 表格 */}
            <div className={part5style.tables} >
                <table border="1" >
                    <thead>
                        <tr>
                            <th style={{width:'50px'}}> </th>
                            <th>电影名</th>
                            <th>影院名</th>
                            <th>放映厅</th>
                            <th>放映日期</th>
                            <th>放映时间</th>
                            <th>售价(元)</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>我不是药神</td>
                            <td>中影4KMAX国际影城(西丽店)</td>
                            <td>1号厅</td>
                            <td>2021-05-14</td>
                            <td>09:30 </td>
                            <td>33 </td>
                            <td>
                                <button><DeleteTwoTone /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>升起的烟花，从下面看?还是从侧面看?</td>
                            <td>中影4KMAX国际影城(西丽店)</td>
                            <td>1号厅</td>
                            <td>2021-05-07</td>
                            <td>20：20</td>
                            <td>20</td>
                            <td>
                                <button><DeleteTwoTone /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>复仇者联盟4:终局之战</td>
                            <td>中影4KMAX国际影城(西丽店)</td>
                            <td>1号厅</td>
                            <td>2021-05-01</td>
                            <td>16:30</td>
                            <td>44</td>
                            <td>
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
export default Part5