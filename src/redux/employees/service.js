import * as http from '../../utils/http';

const API_ROUTS = {
    employees: '/employees',
    groups: '/groups',
};

export const fetchEmployees = async () => {
    return (await http.get(API_ROUTS.employees))?.data;
}

export const fetchEmployeeGroups = async () => {
    return (await http.get(API_ROUTS.groups))?.data;
}

export const createGroup = async (data) => {
    return (await http.post(API_ROUTS.groups, data))?.data;
}