import axios from 'axios';

export default {
    signup: function (data) {
        return axios.post('/api/user-login/signup', data);
    },
    login: function (data) {
        return axios.post('/api/user-login/login', data);
    },
    fetchUser: function () {
        return axios.get('/api/user-login/user_data');
    },
    fetchCourses: function () {
        return axios.get('/api/course');
    }
};