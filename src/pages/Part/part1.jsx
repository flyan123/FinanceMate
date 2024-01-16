import React from "react";
import part1style from './part1.module.less'

const Part1 = () => {
    return(
        <div >
            {/* 头部 数据内容*/}
            <div className={part1style.topnumber}>
                <ul>
                    {/* 用户数据 */}
                    <li>
                        <div className="users">
                            <div className="number">3</div>
                            <div className="text">用户数据</div>
                        </div>
                    </li>
                    <li>
                        <div className="users">
                            <div className="number">3</div>
                            <div className="text">用户数据</div>
                        </div>
                    </li>
                </ul>
            </div>
            {/*  第二部分*/}
            <div className={part1style.middlenumber} >
                <div className="one">
                    <div>用户性别比例</div>
                    {/* 图表 */}
                    <div>

                    </div>
                </div>

                {/*  */}
                <div className="two">
                    <div>电影票类型分布</div>
                    {/* 图表 */}
                    <div>

                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Part1