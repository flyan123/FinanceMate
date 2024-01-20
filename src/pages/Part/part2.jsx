import React from "react";
import part2style from './part2.module.less'

import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Part2 = () => {
    return (
        <div className={part2style.all}>
            <div className="searchbox">
                
                    <Space direction="vertical">
                        <Search
                            placeholder="请输入账号进行查询"
                            onSearch={onSearch}
                            style={{
                                width: 500,
                            }}
                        />
                    </Space>
                    <button className="searchbut">添加用户</button>
                

            </div>
        </div>
    )
}

export default Part2