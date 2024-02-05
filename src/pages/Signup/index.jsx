import React, {  useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
} from 'antd';

import signupstyle from './sig.module.less'

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


const Signup = () => {

  const [form] = Form.useForm();
  const onSubmit = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

// 1.受控组件（1.存取数据状态）
       function constructor(){
          super();
          this.state={
            nickname:"",
            password:"",
            confirm:"",
            email:"",

          }
        }



  return (

    <div className={signupstyle.all}>

      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onSubmit={onSubmit}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        style={{
          maxWidth: 700,
        }}
        scrollToFirstError
      >
        {/* 1 */}
        <h1>管理员注册</h1>

        {/* 2. 用户名 */}
        <Form.Item
          name="nickname"
          label="用户名"
          tooltip="你希望别人怎么称呼你?"
          rules={[
            {
              required: true,
              message: '请输入您的昵称!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>


        {/*3.  密码 */}
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: '请输入您的密码!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>


        {/* 4. 确认密码 */}
        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请确认您的密码!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('您输入的新密码不匹配!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>


        {/* 5. 电子邮件 */}
        <Form.Item
          name="email"
          label="电子邮件"
          rules={[
            {
              type: 'email',
              message: '输入无效的电子邮件!',
            },
            {
              required: true,
              message: '请输入您的邮箱!',
            },
          ]}
        >
          <Input />
        </Form.Item>


        {/* 6. 手机号码 */}
        {/* <Form.Item
          name="phone"
          label="手机号码"
          rules={[
            {
              required: true,
              message: '请输入您的电话号码!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item> */}


        {/*7.  label=验证码 */}
        {/* <Form.Item label="验证码" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: '请输入您的验证码!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button>获取验证码</Button>
            </Col>
          </Row>
        </Form.Item> */}


        {/* 8.协议 */}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('应该接受协议')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            我已经阅读了 <a href="">协议</a>
          </Checkbox>
        </Form.Item>


        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>

      </Form>
    </div>
  );
};
export default  Signup  ;  
// export default class Signup extends Component;  