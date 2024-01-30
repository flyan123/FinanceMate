import React, {  useContext, useEffect, useRef, useState} from "react";
import part2style from './part2.module.less'
import { Button, Form, Input, Popconfirm,Space, Table,Flex } from 'antd';

import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);


const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};
const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);
    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };
    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({
                ...record,
                ...values,
            });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };
    let childNode = children;
    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                account={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }
    return <td {...restProps}>{childNode}</td>;
};

// Part2
const Part2 = () => {
    const [dataSource, setDataSource] = useState([
        {
            key: '0',
            num: '0',
            name: `我不是药神`,
            filename: `中影4KMAX国际影城(西丽店)`,
            room:`1号厅`,
            day: "2021.10.11",
            time: "09:30",
            money:"33"
        },
        {
            key: '1',
            num: '1',
            name: `升起的烟花，从下面看?还是从侧面看?`,
            filename: `中影4KMAX国际影城(西丽店)`,
            room:`1号厅`,
            day: "2021.11.15",
            time: "20:20",
            money:"20"
        },
    ]);
    const [count, setCount] = useState(2);
    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };
    const defaultColumns = [
        {
            title: ' ',
            dataIndex: 'num',
            width: '5%',
            // editable: true,
        },{
            title: '电影名',
            dataIndex: 'name',
            width: '15%',
            editable: true,
        },{
            title: '影院名',
            dataIndex: 'filename',
            width: '20%',
            editable: true,
        },{
            title: '放映厅',
            dataIndex: 'room',
            width: '15%',
            editable: true,
        },
        {
            title: '放映日期',
            dataIndex: 'day',
            width: '10%',
            editable: true,

        },
        {
            title: '放映时间',
            dataIndex: 'time',
            width: '15%',
            editable: true,

        },
        {
            title: '售价(元)',
            dataIndex: 'money',
            width: '16%',
            editable: true,

        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="是否删除?" onConfirm={() => handleDelete(record.key)}>
                        <a><DeleteTwoTone /></a>
                    </Popconfirm>
                ) : null,
                width: '30%',

        },
    ];
    const handleAdd = () => {
        const newData = {
            key: count,
            num:`${count}`,
            name: `我不是药神`,
            filename: `中影4KMAX国际影城(西丽店)`,
            room:`1号厅`,
            day: "2001.10.11",
            time: "09:30",
            money:"33"
            
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };
    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };
    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });

    // return

    return (
        
        <div className={part2style.all}>
             <div className={part2style.searchbox}>
                <Space direction="vertical">
                    <Search
                        placeholder="请输入内容"
                        onSearch={onSearch}
                        style={{
                            width: 500,
                        }}
                    // value={name}
                    // onChange={e => setName(e.target.value)}
                    />
                </Space>
                <Button
                        onClick={handleAdd}
                        type="primary"
                        style={{
                            marginBottom: 16,
                            

                        }}
                    >
                        电影排片
                    </Button>
                </div>
                <div className={part2style.text2}>
                    <Table
                        components={components}
                        rowClassName={() => 'editable-row'}
                        bordered
                        dataSource={dataSource}
                        columns={columns}
                    />
                </div>
       
        </div>
    );
};
export default Part2;