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
    findCoursesByDepartment: function (limit, department) {
        let queryString = '?limit=' + limit + "&department=" + department
        return axios.get('/api/course' + queryString);
    },
    fetchCourses: function () {
        return axios.get('/api/course');
    }
};