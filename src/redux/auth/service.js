import * as http from '../../utils/http';

const API_ROUTS = {
    users: '/users',
};

export const createUser = async (user) => {
    return (await http.post(API_ROUTS.users, user))?.data;
}