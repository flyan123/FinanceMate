
import React from "react";
import {useRoutes,Link} from 'react-router-dom'

import signupstyle from'./sig.module.less'


const Signup = () => {
    return (
        <div className={signupstyle.regis}>
            <div className="rg_layout">
            {/* 新用户注册 */}
                <div className="rg_left">
                    <p>新用户注册</p>
                </div>
                {/* 内容 */}
                <div className="rg_center">
                    
                    <div className="rg_form">
                        <form action="#" method="post" >
                            <table>
                                {/* 用户名 */}
                                <tr>
                                    {/* <!--label 标签的作用是当点击文字也会跳到文本输出框--> */}
                                    {/* <!--for属性与ID属性对应规定 label 绑定到哪个表单元素。--> */}
                                    <td className="td_left"><label for="username">用户名</label> </td>
                                    <td className="td_right"><input type="text" name="username" id="user-name" /> </td>
                                </tr>
                                {/* 密码 */}
                                <tr>
                                    <td className="td_left"><label for="password">密码</label> </td>
                                    <td className="td_right"><input type="password" name="password" id="password" /> </td>
                                </tr>
                                {/* email */}
                                <tr>
                                    {/* <!--label 标签的作用是当点击文字也会跳到文本输出框--> */}
                                    <td className="td_left"><label for="email">email</label> </td>
                                    <td className="td_right"><input type="email" name="email" id="email" /> </td>
                                </tr>
                                {/* 姓名 */}
                                <tr>
                                    <td className="td_left"><label for="name">姓名</label> </td>
                                    <td className="td_right"><input type="text" name="name" id="name" /> </td>
                                </tr>
                                {/* 手机号 */}
                                <tr>
                                    <td className="td_left"><label for="tel">手机号</label> </td>
                                    <td className="td_right"><input type="text" name="tel" id="tel" /> </td>
                                </tr>
                                    {/* 发送验证码 */}
                                <tr>
                                    <td className="td_left"><label for="checkcode">验证码</label> </td>
                                    <td className="td_right">
                                        <input type="text" name="username" id="checkcode" />
                                        <input type="button" value="发送验证码" />
                                        <img src="images/verify_code.jpg" id="img_check"></img>
                                    </td>
                                </tr>
                                <tr>
                                    {/* 注册 */}
                                    <td colspan="2" align="center">
                                        <input type="submit" value="注册" id="btn_sub" />
                                    </td>
                                </tr>

                            </table>
                        </form>
                        
                    </div>
                   
                </div>
                {/* 已有账号?立刻登入 */}
                <div className="rg_right">
                    <Link to='/loginto'>
                        <p>已有账号？立刻登入</p>
                    </Link>
                  
                </div>
            </div>


        </div>
    )
}


export default Signup