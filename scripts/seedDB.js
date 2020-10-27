const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/coursescheduler'
);

const professorSeed = [
    {
        name: 'John Watson',
        department: 'INF',
        school: 'The School of Information',
        office: 'UTA 5.326',
        email: 'john.watson@ischool.utexas.edu',
        courseLoad: 'Medium',
        grading: 'Pass/fail allowed',
        projects: 'Medium to heavy',
        teachingPreference: 'Being on time',
        organization: 'PowerPoint and discussion',
        website: 'https://www.johnwatson.com/',
        courses: ['jiowfijw2a', 'iwajifjwiejf', 'owiefowijefwioj']
    },
    {
        name: 'Sarah Webber',
        department: 'DES',
        school: 'The School of Design',
        office: 'UTA 3.102',
        email: 'sarah.webber@ischool.utexas.edu',
        courseLoad: 'Medium',
        grading: 'Pass/fail allowed',
        projects: 'Medium to heavy',
        teachingPreference: 'Being on time',
        organization: 'PowerPoint and discussion',
        website: 'https://www.sarahwebber.com/',
        courses: ['awbwaegwgw', 'iawoijwef']
    }
];

const courseSeed = [
    {
        title: 'Technologies in Design Practice',
        department: 'DES',
        courseNumber: 102,
        term: '2020 Fall',
        classCode: 10001,
        level: 'Graduate',
        professor: '1232afaw',
        capacity: 20,
        numberRegistered: 2,
        finalDate: new Date(2021, 02, 22),
        status: 'Open',
        days: [
            'Monday',
            'Wednesday'
        ],
        startTime: '8:00',
        endTime: '10:00',
        duration: '120',
        ratings: [4, 5, 4, 4],
        usersRated: ['193j20', '028u3r2', '2082f82'],
        textbook: 'Design 101'
    },
    {
        title: 'Introduction to Graphic Design',
        department: 'DES',
        courseNumber: 303,
        term: '2020 Fall',
        classCode: 10002,
        level: 'Graduate',
        professor: '1232afaw',
        capacity: 20,
        numberRegistered: 2,
        finalDate: new Date(2021, 02, 22),
        status: 'Open',
        days: [
            'Monday',
            'Wednesday'
        ],
        startTime: '8:00',
        endTime: '10:00',
        duration: '120',
        ratings: [4, 5, 4, 4],
        usersRated: ['193j20', '028u3r2', '2082f82'],
        textbook: 'Design 101'
    },
    {
        title: 'Introduction to Design Thinking',
        department: 'DES',
        courseNumber: 301,
        term: '2020 Fall',
        classCode: 10003,
        level: 'Graduate',
        professor: '1232afaw',
        capacity: 20,
        numberRegistered: 2,
        finalDate: new Date(2021, 02, 22),
        status: 'Open',
        days: [
            'Monday',
            'Wednesday'
        ],
        startTime: '8:00',
        endTime: '10:00',
        duration: '120',
        ratings: [4, 5, 4, 4],
        usersRated: ['193j20', '028u3r2', '2082f82'],
        textbook: 'Design 101'
    },
    {
        title: 'Design Studio I',
        department: 'DES',
        courseNumber: 304,
        term: '2020 Fall',
        classCode: 10004,
        level: 'Graduate',
        professor: '1232afaw',
        capacity: 20,
        numberRegistered: 2,
        finalDate: new Date(2021, 02, 22),
        status: 'Open',
        days: [
            'Monday',
            'Wednesday'
        ],
        startTime: '8:00',
        endTime: '10:00',
        duration: '120',
        ratings: [4, 5, 4, 4],
        usersRated: ['193j20', '028u3r2', '2082f82'],
        textbook: 'Design 101'
    },
    {
        title: 'Design Studio II',
        department: 'DES',
        courseNumber: 305,
        term: '2020 Fall',
        classCode: 10005,
        level: 'Graduate',
        professor: '1232afaw',
        capacity: 20,
        numberRegistered: 2,
        finalDate: new Date(2021, 02, 22),
        status: 'Open',
        days: [
            'Monday',
            'Wednesday'
        ],
        startTime: '8:00',
        endTime: '10:00',
        duration: '120',
        ratings: [4, 5, 4, 4],
        usersRated: ['193j20', '028u3r2', '2082f82'],
        textbook: 'Design 101'
    },
    {
        title: 'Design Studio III',
        department: 'DES',
        courseNumber: 306,
        term: '2020 Fall',
        classCode: 10006,
        level: 'Graduate',
        professor: '1232afaw',
        capacity: 20,
        numberRegistered: 2,
        finalDate: new Date(2021, 02, 22),
        status: 'Open',
        days: [
            'Monday',
            'Wednesday'
        ],
        startTime: '8:00',
        endTime: '10:00',
        duration: '120',
        ratings: [4, 5, 4, 4],
        usersRated: ['193j20', '028u3r2', '2082f82'],
        textbook: 'Design 101'
    },
    {
        title: 'Design and Culture',
        department: 'DES',
        courseNumber: 307,
        term: '2020 Fall',
        classCode: 10007,
        level: 'Graduate',
        professor: '1232afaw',
        capacity: 20,
        numberRegistered: 2,
        finalDate: new Date(2021, 02, 22),
        status: 'Open',
        days: [
            'Monday',
            'Wednesday'
        ],
        startTime: '08:00',
        endTime: '11:00',
        duration: 120,
        ratings: [4, 5, 4, 4],
        usersRated: ['193j20', '028u3r2', '2082f82'],
        textbook: 'Design 101'
    },
    {
        title: 'Introduction to Design Theory and Criticism',
        department: 'DES',
        courseNumber: 308,
        term: '2020 Fall',
        classCode: 10008,
        level: 'Graduate',
        professor: '1232afaw',
        capacity: 20,
        numberRegistered: 2,
        finalDate: new Date(2021, 02, 22),
        status: 'Open',
        days: [
            'Monday',
            'Wednesday'
        ],
        startTime: '8:00',
        endTime: '10:00',
        duration: '120',
        ratings: [4, 5, 4, 4],
        usersRated: ['193j20', '028u3r2', '2082f82'],
        textbook: 'Design 101'
    },
    {
        title: 'Introduction to Design',
        department: 'DES',
        courseNumber: 309,
        term: '2020 Fall',
        classCode: 10009,
        level: 'Graduate',
        professor: '1232afaw',
        capacity: 20,
        numberRegistered: 2,
        finalDate: new Date(2021, 02, 22),
        status: 'Open',
        days: [
            'Monday',
            'Wednesday'
        ],
        startTime: '8:00',
        endTime: '10:00',
        duration: '120',
        ratings: [4, 5, 4, 4],
        usersRated: ['193j20', '028u3r2', '2082f82'],
        textbook: 'Design 101'
    },
    {
        title: 'Virtual Environment',
        department: 'INF',
        courseNumber: 385,
        term: '2020 Fall',
        classCode: 27185,
        level: 'Graduate',
        professor: '1232afaw',
        capacity: 20,
        numberRegistered: 2,
        finalDate: new Date(2021, 02, 22),
        status: 'Open',
        days: [
            'Tuesday',
            'Thursday'
        ],
        startTime: '13:00',
        endTime: '15:00',
        duration: '120',
        ratings: [4, 5, 4, 4],
        usersRated: ['193j20', '028u3r2', '2082f82'],
        textbook: 'Virtual Environment'
    },
    {
        title: 'Designing Dynamic Web Pages',
        department: 'INF',
        courseNumber: 380,
        term: '2020 Fall',
        classCode: 10010,
        level: 'Graduate',
        professor: '1232afaw',
        capacity: 20,
        numberRegistered: 2,
        finalDate: new Date(2021, 02, 22),
        status: 'Open',
        days: [
            'Monday',
            'Wednesday'
        ],
        startTime: '8:00',
        endTime: '10:00',
        duration: '120',
        ratings: [4, 5, 4, 4],
        usersRated: ['193j20', '028u3r2', '2082f82'],
        textbook: 'Design 101'
    }
];

db.Course
    .remove({})
    .then(() => db.Course.collection.insertMany(courseSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Professor
    .remove({})
    .then(() => db.Professor.collection.insertMany(professorSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });