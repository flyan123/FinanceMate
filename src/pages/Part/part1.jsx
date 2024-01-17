import React from "react";
import part1style from './part1.module.less'

const Part1 = () => {
    return(
        <div className={part1style.all}>
            {/* 头部 数据内容*/}
            <div className={part1style.topnumber}>
                <ul>
                    {/* 用户数据 */}
                    <li>
                        <div className="users">
                            <div className="number">3</div>
                            <div className="text">用户总数</div>
                        </div>
                    </li>
                    <li>
                        <div className="users">
                            <div className="number">5</div>
                            <div className="text">影院总数</div>
                        </div>
                    </li>
                    <li>
                        <div className="users">
                            <div className="number">12</div>
                            <div className="text">影片总数</div>
                        </div>
                    </li>
                    <li>
                        <div className="users">
                            <div className="number">3</div>
                            <div className="text">订单数量</div>
                        </div>
                    </li>
                </ul>
            </div>
            {/*  第二部分*/}
            <div className={part1style.middlenumber} >
                <div className={part1style.one} >
                    <h5>用户性别比例</h5>
                    {/* 图表 */}
                    <div className={part1style.rose}>

                    </div>
                </div>

                {/*  */}
                <div className={part1style.two}>
                    <h5>电影票类型分布</h5>
                    {/* 图表 */}
                    <div className={part1style.rose}>

                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Part1