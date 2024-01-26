import React, { useState } from "react";
import part2style from './part2.module.less'
import { Button, Flex } from 'antd';

import { Input, Space } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);




let nextId = 3;

const initialTodos = [
    { id: 0,num:'1', Account: '231321', User: '测试用户1', Gender: '男', Birthday: '2001.2.1', PNum: '1245456456', done: true },
    { id: 1,num:'2', Account: '231321', User: '测试用户1', Gender: '男', Birthday: '2001.2.1', PNum: '1245456456', done: false },
    { id: 2,num:'3', Account: '231321', User: '测试用户1', Gender: '男', Birthday: '2001.2.1', PNum: '1245456456', done: false },
];

// let intotext = { id: 0, Account: '231321', User: '测试用户1', Gender: '男', Birthday: '2001.2.1', PNum: '1245456456', done: true }

// 2222
function TaskList({
    todos,
    onChangeTodo,
    onDeleteTodo
}) {
    return (
        <table border='1'>
            {todos.map(todo => (
                <tr key={todo.id} style={{ height: '35px' }}>
                    
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </tr>
            ))}
        </table>
    );
}

function Task({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>

                  
                <td>
                    <input value={todo.num} onChange={e => { onChange({ ...todo, num: e.target.value }); }} />
                </td>
                <td>
                    <input value={todo.Account} onChange={e => { onChange({ ...todo, Account: e.target.value }); }} />
                </td>
                <td>
                    <input value={todo.User} onChange={e => { onChange({ ...todo, User: e.target.value }); }} />
                </td>
                <td>
                    <input value={todo.Gender} onChange={e => { onChange({ ...todo, Gender: e.target.value }); }} />
                </td>
                <td>
                    <input value={todo.Birthday} onChange={e => { onChange({ ...todo, Birthday: e.target.value }); }} />
                </td>
                <td>
                    <input value={todo.PNum} onChange={e => { onChange({ ...todo, PNum: e.target.value }); }} />
                </td>
                <td>
                    <button onClick={() => setIsEditing(false)}><EditTwoTone /></button>
                    <button onClick={() => onDelete(todo.id)}><DeleteTwoTone /></button>
                </td>

                {/* <button onClick={() => setIsEditing(false)}>
                    编辑
                </button> */}
               

            </>
        );
    } else {
        todoContent = (
            <>
     
                   
                <td>
                    {todo.num}
                </td>
                <td>
                    {todo.Account}
                </td>

                <td>
                    {todo.User}
                </td>

                <td>
                    {todo.Gender}
                </td>
                <td>
                    {todo.Birthday}
                </td>
                <td>
                    {todo.PNum}
                </td>
                <td>
                    <button onClick={() => setIsEditing(true)}><EditTwoTone /></button>
                    <button onClick={() => onDelete(todo.id)}><DeleteTwoTone /></button>
                </td>


              
     
            </>
        );
    }
    return (
        <label>

            {todoContent}
            {/* <button onClick={() => onDelete(todo.id)}>
                删除
            </button> */}
        </label>
    );
}





const Part2 = () => {

    // 
    // { id: 0, Account: '231321', User: '测试用户1', Gender: '男', Birthday: '2001.2.1', PNum: '1245456456', done: true },
    // let nextId = 0;
   

    // 修改编辑函数

    const [account, setAccount] = useState()
    const [user, setUser] = useState()
    const [age, setAge] = useState()
    const [change, setChange] = useState(false)


    // 333
    const [todos, setTodos] = useState(
        initialTodos
    );

    function handleAddTodo(num,Account,User,Gender,Birthday,PNum) {
        setTodos([
            ...todos,
           
            { 
                id: nextId++,
                num:num,
                Account: Account,
                User: User, 
                Gender: Gender, 
                Birthday:Birthday,
                PNum: PNum,
                done: false 
             },

        ]);
    }

    function handleChangeTodo(nextTodo) {
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo;
            } else {
                return t;
            }
        }));
    }

    function handleDeleteTodo(todoId) {
        setTodos(
            todos.filter(t => t.id !== todoId)
        );
    }

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
                        // value={name}
                        // onChange={e => setName(e.target.value)}
                        />
                    </Space>
                    <div className={part2style.searchbut}>
                        {/*  () => {
                                    setArtists([
                                        ...artists,
                                        // 并在末尾添加了一个新的元素
                                        { id: nextId++, name: name }
                                    ]);
                                } */}
                        <Flex gap="small" wrap="wrap" >
                            <Button type="primary"
                                onClick={()=>handleAddTodo()}
                                  
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
                        
                        <TaskList
                            todos={todos}
                            onChangeTodo={handleChangeTodo}
                            onDeleteTodo={handleDeleteTodo}
                        />
                    </table>
                </div>


            </div>

            <div>
                {/* {change?<input onChange={e=>setText(e.target.value)} />:text} */}
                <br />
                {change ? <input onChange={e => setAge(e.target.value)} style={{ width: '10px' }} /> : age}

                {/* <button onClick={()=>setChange(!change)}>修改</button> */}
            </div>
        </div>

    )
}

export default Part2