import React from "react"
import part401style from './part401.module.less'


import { Input, Space } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value); 

const Part401 =()=>{
   return(
       <div>
              <div className={part401style.all}>
            <div className={part401style.searchbox}>

                <Space direction="vertical">
                    <Search
                        placeholder="请输入内容"
                        onSearch={onSearch}
                        style={{
                            width: 500,
                        }}
                    />
                </Space>
               
            </div>
            {/* 表格 */}
            <div className={part401style.tables} >
                <table border="1" >
                    <thead>
                        <tr>
                            <th style={{width:'50px'}}> </th>
                            <th style={{width:'150px'}}>用户名</th>
                            <th>电影名</th>
                            <th>评论时间</th>
                            <th>用户评分</th>
                            <th  style={{width:'150px'}}>评论内容</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>测试用户1</td>
                            <td>天气之子</td>
                            <td>2021-03-31 16:10:38</td>
                            <td>10</td>
                            <td>好看!</td>
                            <td>
                                <button><DeleteTwoTone /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>测试用户2</td>
                            <td>Hello Wrold</td>
                            <td>2021-03-14 0244:10</td>
                            <td>9</td>
                            <td>good!</td>
                            <td>
                                <button><DeleteTwoTone /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>测试用户3</td>
                            <td>Hello Wrold</td>
                            <td>2021-03-14 02:40:36</td>
                            <td>10</td>
                            <td>好看!</td>
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
export default Part401