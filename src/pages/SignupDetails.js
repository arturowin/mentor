import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Col, Row } from 'antd';
import {signupUser} from '../redux/auth/thunks';
import useIsLogedIn from '../hooks/useIsLogedIn';
import * as helpers from '../utils/helpers';

const SignupDetails = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const signup = useSelector((state) => state.auth);
    const [isLoggedIn] = useIsLogedIn();

    if(!helpers.areAllSet(signup?.signupData)) {
          history.push('/signup')
    }
    useEffect(() => {
      if(isLoggedIn){
        history.push('/create-group');
      }
    }, [isLoggedIn]);

    const onFinish = (values) => {
      const data = {...values, ...signup.signupData};
      dispatch(signupUser(data));
    };
    
    return (
      <Row justify="center">
         <Col span={6}>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          initialValues={signup?.details}
        >
        <Form.Item
          name="position"
          rules={[{ required: true, message: 'Please input your current position!'}]}
        >
          <Input placeholder="Position"/>
        </Form.Item>
        <Form.Item
          name="experiance"
          rules={[{ required: true, message: 'Please input your Experiance!'}]}
        >
          <Input placeholder="Years of experiance"/>
        </Form.Item>
        <Button type="primary" htmlType="submit" className="next-button">
            Submit
        </Button>
        <Button type="primary" onClick={()=> history.push('/signup')} htmlType="button" className="prev-button">
            Prev
        </Button>
      </Form>
      </Col>
      </Row>
    )
}

export default SignupDetails;