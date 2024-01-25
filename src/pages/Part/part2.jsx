import React, { useState } from "react";
import part2style from './part2.module.less'
import { Button, Flex } from 'antd';

import { Input, Space } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';


const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

let nextId = 3;

// let intotext = { id: 0, Account: '231321', User: '测试用户1', Gender: '男', Birthday: '2001.2.1', PNum: '1245456456', done: true }

const Part2 = () => {

    // 
    // { id: 0, Account: '231321', User: '测试用户1', Gender: '男', Birthday: '2001.2.1', PNum: '1245456456', done: true },
    // let nextId = 0;
    const [name, setName] = useState();
    const [artists, setArtists] = useState([]);

    const [isEditing, setIsEditing] = useState(false);
    const [gender, setGender] = useState();

    // 修改编辑函数
  
    const [account,setAccount]=useState()
    const [user,setUser]=useState()
    const [age,setAge]=useState()
    const [change,setChange]=useState(false)

    return (

        <div>
            <div className={part2style.all}>
                <div className={part2style.searchbox}>

                    <Space direction="vertical">
                        <Search
                            placeholder="请输入账号进行查询"
                            onSearch={onSearch}
                            style={{
                                width: 500,
                            }}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Space>
                    <div className={part2style.searchbut}>
                        <Flex gap="small" wrap="wrap" >
                            <Button type="primary"
                                onClick={() => {
                                    setArtists([
                                        ...artists,
                                        // 并在末尾添加了一个新的元素
                                        { id: nextId++, name: name }
                                    ]);
                                }}
                            >添加用户</Button>

                        </Flex>
                    </div>
                </div>

                {/* 表格 */}
                <div className={part2style.tables} >
                    <table border="1" >
                        <thead>
                            <tr style={{ height: '35px' }}>
                                <th style={{ width: '25px' }}>  </th>
                                <th>头像</th>
                                <th>账号</th>
                                <th>用户名</th>
                                <th>性别</th>
                                <th>生日</th>
                                <th>电话</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tr>
                            <td >1</td>
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
                            <td>2</td>
                            <td><button>更新图片</button></td>
                            <td>231321</td>
                            <td>测试用户1</td>
                            <td>男</td>
                            <td>2001.2.1</td>
                            <td>1245456456</td>
                            <td>
                                <button ><EditTwoTone /></button>
                                <button ><DeleteTwoTone /></button>
                            </td>
                        </tr>
                        {artists.map(artist => (
                            <tr key={artist.id}>
                                <td>{artist.id}</td>
                                <td><button>更新图片</button></td>

                                <td>{change?<input onChange={e=>setAccount(e.target.value)} />:account}</td>
                                <td>{change?<input onChange={e=>setUser(e.target.value)} />:user}</td>
                                <td>男</td>
                                <td>2001.2.1</td>
                                <td>1245456456</td>

                                <td>
                                    {/* 修改 */}
                                    <button onClick={()=>setChange(!change)}><EditTwoTone /></button>
                                    {/* 删除 */}
                                    <button onClick={() => {
                                        setArtists(
                                            artists.filter(a =>
                                                a.id !== artist.id
                                            )
                                        );
                                    }}><DeleteTwoTone /></button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>


            </div>

            <div>
                {/* {change?<input onChange={e=>setText(e.target.value)} />:text} */}
                <br/>
                {change?<input onChange={e=>setAge(e.target.value)} style={{width:'10px'}}/>:age}

                {/* <button onClick={()=>setChange(!change)}>修改</button> */}
            </div>
        </div>

    )
}

export default Part2