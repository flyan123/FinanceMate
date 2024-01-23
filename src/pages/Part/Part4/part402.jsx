import React from "react"
import part402style from './part402.module.less'


import { Input, Space } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value); 

const Part402 =()=>{
   return(
       <div>
              <div className={part402style.all}>
            <div className={part402style.searchbox}>

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
            <div className={part402style.tables} >
                <table border="1" >
                    <thead>
                        <tr>
                            <th style={{width:'50px'}}> </th>
                            <th style={{width:'150px'}}>用户名</th>
                            <th>电影名</th>
                            <th>影院名</th>
                            <th>票数</th>
                            <th style={{width:'150px'}}>总价</th>
                            <th>取票码</th>
                            <th>下单时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>测试用户1</td>
                            <td>天气之子</td>
                            <td>中影4KMAX国际影城(西丽店)</td>
                            <td>4</td>
                            <td>132</td>
                            <td>159162</td>
                            <td>201-3-31</td>
                            <td>
                                <button><DeleteTwoTone /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>测试用户2</td>
                            <td>Hello Wrold</td>
                            <td>中影4KMAX国际影城(西丽店)</td>
                            <td>4</td>
                            <td>132</td>
                            <td>485036</td>
                            <td>2021-3.14</td>
                            <td>
                                <button><DeleteTwoTone /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>测试用户2</td>
                            <td>Hello Wrold</td>
                            <td>中影4KMAX国际影城(西丽店)</td>
                            <td>3</td>
                            <td>66</td>
                            <td>342726</td>
                            <td>2021-3-14</td>
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
export default Part402