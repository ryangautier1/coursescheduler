const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/coursescheduler'
);

const courseSeed = [
    {
        title: 'Design Thinking',
        department: 'ITD',
        courseNumber: 380,
        term: '2020 Fall',
        classCode: 12345,
        level: 'Graduate',
        professor: '1232afaw',
        capacity: 20,
        numberRegistered: 2,
        finalDate: 2021/4/30,
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
        finalDate: 2021/4/30,
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