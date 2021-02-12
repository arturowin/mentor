import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Col, Row } from 'antd';
import {signupStepOne} from '../redux/auth/actions'

const SignUp = () => {

    const signupData = useSelector((state) => state.auth?.signupData);
    const dispatch = useDispatch();
    const history = useHistory();
    const onFinish = (values) => {
      dispatch(signupStepOne(values))
      history.push('/signup-details')
    };

    return (
      <Row style={{ marginTop:50 }} justify="center">
         <Col span={6}>
        <Form
          name="sgignup"
          className="signup-form"
          initialValues={signupData}
          onFinish={onFinish}
        >
        <Form.Item
          name="firstname"
          rules={[{ required: true, message: 'Please input your first name!'}]}
        >
          <Input placeholder="First name" />
        </Form.Item>
        <Form.Item
          name="lastname"
          rules={[{ required: true, message: 'Please input your last name!'}]}
        >
          <Input placeholder="Last Name"/>
        </Form.Item>
        <Form.Item
          name="location"
          rules={[{ required: true, message: 'Please input your location!'}]}
        >
          <Input placeholder="Location"/>
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input a username!'}]}
        >
          <Input placeholder="Username"/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input a password!'}]}
        >
          <Input type='password' placeholder="Password"/>
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
            Next
        </Button>
      </Form>
      </Col>
      </Row>
    )
}

export default SignUp;