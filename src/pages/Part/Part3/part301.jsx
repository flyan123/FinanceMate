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
                            <tr >
                                <td>1</td>
                                <td><button>更新海报</button></td>
                                <td>钢铁侠21</td>
                                <td>沙恩 布莱克</td>
                                <td>科幻</td>
                                <td>2021-03-15</td>
                                <td >
                                     <p >钢铁侠是一部由美国漫威电影工作室出品、小罗伯特·唐尼主演的科幻冒险电影。影片主要讲述托尼·斯塔克（钢铁侠）的故事。托尼·斯塔克是一个亿万富翁、天才发明家兼工程师，同时也是军火公司总裁。他在一次绑架事件后改进了钢铁战衣的功能，化身“钢铁侠”，以一个义务警察的身份保护世界和平。在电影中，钢铁侠是“漫威电影宇宙”系列的首部电影，于2008年上映。</p>
                                </td>
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
                                <td>2021.05.14</td>
                                <td >
                                     <p >《我不是药神》的剧情主要围绕着一个普通中年男子程勇展开。程勇原本是一个平凡的小人物，生活拮据，面临着生意困境和家庭压力。然而，当得知自己患上了慢性粒细胞性白血病后，他偶然间得知了印度有一种能够治疗白血病的仿制药“格列宁”，于是他走上了代购仿制药的道路。在程勇代购仿制药的过程中，他结识了吕受益、刘思慧、彭浩等志同道合的人。他们一起经历了种种艰辛和困境，最终将仿制药卖到了印度，挽救了无数患者的生命。在这个过程中，程勇也从一个交不起房租的男性保健品商贩，一跃成为印度仿制药“格列宁”的独家代理商。影片中通过展现程勇的成长历程和心路历程，深刻地反映了社会现实中的医疗问题，尤其是“看病贵、看病难”的问题。同时也呈现了人性的温情和善良，展现了人性中的美好和希望。然而，随着程勇的名声越来越大，也引来了不速之客吕受益的妻子张长林。张长林举报程勇售卖假药，导致警方介入调查。最终，程勇意识到自己已经无法继续逃避法律责任，决定放弃代理仿制药。而此时，吕受益也因为病情恶化去世，让程勇倍感痛苦和内疚。影片最后，程勇重新回到自己的神油店，过上了平凡的生活。而那些曾经患病的病友们也因为失去了程勇的帮助而陷入困境。影片通过展现这些情节，强调了医疗问题对于普通人的重要性，以及个人在面对困境时的无奈和无力。</p>
                                </td>
                                <td>
                                    <button><EditTwoTone /></button>
                                    <button><DeleteTwoTone /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><button>更新海报</button></td>
                                <td>复仇者联盟</td>
                                <td>安东尼</td>
                                <td>科幻</td>
                                <td>2021.05.01</td>
                                <td>
                                    <p>
                                    《复仇者联盟》的剧情主要围绕着地球面临的各种危机和挑战，以及超级英雄们团结一心、共同对抗邪恶势力的故事展开。一股突如其来的强大力量从宇宙魔方中出现，还带来了邪神洛基（汤姆·希德勒斯顿饰），他带走了宇宙魔方，并摧毁了实验现场，使长期致力于保护全球安危的“神盾局”感到措手不及。超级英雄们产生了职业倦怠，已经卸下战甲的托尼·斯塔克因此发明了“奥创”（詹姆斯·斯派德饰）——有自我意识、有学习能力的人工智能机器人，并将指挥机器人军团的重任交给奥创。令超级英雄们始料不及的是，不断进化的奥创得出了“人类是地球上最大的威胁”这一结论，进而开始实施消灭人类的计划。有强大能力的改造者马克西莫夫兄妹“快银”皮特罗（亚伦·泰勒-约翰逊饰）和“绯红女巫”旺达（伊丽莎白·奥尔森饰）也成为奥创的帮手，四处制造麻烦。为了应对来自外星的邪恶势力，超级英雄们重新集结起来，组成复仇者联盟。他们各显神通，团结一心，终于战胜了邪恶势力，保证了地球的安全。在《复仇者联盟》系列电影中，观众可以看到复仇者们在面对各种危机时的团结和勇气，以及他们为了保护地球和人类而奋斗的决心。同时，影片中也探讨了人性和道德的复杂问题，展现了超级英雄们在面对困境时的选择和决策。
                                    </p>
                                </td>
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