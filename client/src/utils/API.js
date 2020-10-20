import axios from 'axios';

export default {
    signup: function (data) {
        return axios.post('/api/user-login/signup', data);
    },
    login: function (data) {
        return axios.post('/api/user-login/login', data);
    }
};