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
    findCourseByTitle: function (title) {
        return axios.get('/api/course/title/' + title)
    },
    fetchCourses: function () {
        return axios.get('/api/course');
    },
    fetchCourseById: function (id) {
        return axios.get('/api/course/' + id)
    },
    fetchProfessors: function () {
        return axios.get('/api/professor');
    },
    fetchProfById: function (id) {
        return axios.get('/api/professor/' + id)
    }
};