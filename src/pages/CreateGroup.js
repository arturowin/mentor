import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button, Col, Row, Table } from 'antd';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();

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
      setSelectedEmployeed(group?.groups || []);
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
      <Row style={{ marginTop:50, marginBottom:500 }} justify="center">
      <Col span={12}>
      <h1>{t('welcome')}</h1>
          <Table
          pagination={false}
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            columns={columns}
            dataSource={employees}
          />
          <div style={{float: 'right', marginTop: 40, marginBottom: 40}}>
              <Button type="primary" onClick={create} htmlType="button">
                Save
            </Button>
        </div>
      </Col>
      </Row>
    )
}

export default CreateGroup;