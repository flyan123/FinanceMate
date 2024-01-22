import React from "react"
import part301style from './part301.module.less'
import { Button, Flex } from 'antd';

import { Input, Space } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Part301 = () => {
    return (
        <div>
            <div className={part301style.all}>
                <div className={part301style.searchbox}>

                    <Space direction="vertical">
                        <Search
                            placeholder="请输入内容"
                            onSearch={onSearch}
                            style={{
                                width: 500,
                            }}
                        />
                    </Space>
                    <div className={part301style.searchbut}>
                        <Flex gap="small" wrap="wrap" >
                            <Button type="primary">添加电影</Button>

                        </Flex>
                    </div>
                </div>
                {/* 表格 */}
                <div className={part301style.tables} >
                    <table border="1" >
                        <thead>
                            <tr>
                                <th style={{width:'40px'}}></th>
                                <th >海报</th>
                                <th >电影名</th>
                                <th >导演</th>
                                <th >类型</th>
                                <th >上映时间</th>
                                <th style={{width:'620px'}}>简介</th>
                                <th >操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><button>更新海报</button></td>
                                <td>钢铁侠21</td>
                                <td>沙恩 布莱克</td>
                                <td>科幻</td>
                                <td>2021-03-15</td>
                                <td>钢铁侠是一部由美国漫威电影工作室出品、小罗伯特·唐尼主演的科幻冒险电影。影片主要讲述托尼·斯塔克（钢铁侠）的故事。托尼·斯塔克是一个亿万富翁、天才发明家兼工程师，同时也是军火公司总裁。他在一次绑架事件后改进了钢铁战衣的功能，化身“钢铁侠”，以一个义务警察的身份保护世界和平。在电影中，钢铁侠是“漫威电影宇宙”系列的首部电影，于2008年上映。</td>
                                <td>
                                    <button><EditTwoTone /></button>
                                    <button><DeleteTwoTone /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><button>更新海报</button></td>
                                <td>我不是药神</td>
                                <td>文牧野</td>
                                <td>剧情</td>
                                <td>2001.2.1</td>
                                <td>1245456456</td>
                                <td>
                                    <button><EditTwoTone /></button>
                                    <button><DeleteTwoTone /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><button>更新海报</button></td>
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


        </div>
    )
}
export default Part301