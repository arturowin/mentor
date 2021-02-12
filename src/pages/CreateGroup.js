import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button, Col, Space, Row, Table } from 'antd';
import { fetchEmployees, createGroup, fetchEmployeeGroups } from '../redux/employees/thunks';


const compare = (index) => (a,b) => (''+a[index]).localeCompare(b[index]);

const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    sorter: {
      compare: compare('first_name'),
    },
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    sorter: {
      compare: compare('last_name'),
    },
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    sorter: {
      compare: compare('gender'),
    },
  },
  {
    title: 'Job Title',
    dataIndex: 'job_title',
    sorter: {
      compare: compare('job_title'),
    },
  },
];

const CreateGroup = () => {

    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employee.data);
    const groups = useSelector((state) => state.employee.groups);
    const user = useSelector((state) => state.auth?.user);
    const [selectedEmployees, setSelectedEmployeed] = useState([]);

    useEffect(() => {
      if(!employees.length){
        dispatch(fetchEmployees());
      }  
    },[employees.length]);


    useEffect(() => {
    if(!groups.length) {
      dispatch(fetchEmployeeGroups());
    } else {
      const group = groups.find(g => g.userId === user.id);
      setSelectedEmployeed(group.groups);
    }
  }, [groups.length]);

    const rowSelection = {
      onChange: (selectedRowKeys) => {
        setSelectedEmployeed(selectedRowKeys);
      },
      selections: true,
      selectedRowKeys: selectedEmployees,
      hideSelectAll: true,
    };

    const create = () => {
      if(selectedEmployees.length) {
        const data = {
          userId: user.id,
          groups: selectedEmployees
        };
        dispatch(createGroup(data));
      }
    }

    return (
      <Row justify="center">
      <Col span={12}>
          <Table
          pagination={false}
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            columns={columns}
            dataSource={employees}
          />
          <Space align="end">
          <Button type="primary" onClick={create} htmlType="button" className="login-form-button">
            Save
        </Button>
        </Space>
      </Col>
      </Row>
    )
}

export default CreateGroup;