import { SubjectsModel, LMSModel, TeachersModel } from './schools';

const history = new SubjectsModel({
    title: 'History',
    lessons: 24,
    description: 'wwwww'
});

const qqq = new SubjectsModel({
    title: 'qqq',
    lessons: 25
});
const qqq2 = new SubjectsModel({
    title: 'qqq',
    lessons: 25
});

// will return subjectId
console.log(history);
console.log(qqq.id);
console.log(qqq2.id);

console.log('-------------------------');

const lms = new LMSModel();
lms.add(history);
lms.add(qqq);
// lms.remove(history);

console.log(lms);

// // will return true or false. Answer will be true if we added this subject to lms
console.log(lms.verify(history));

// // will return array of registered subjects
console.log(lms.readAll());

//   [
//     {
//       subjectId: null
//     }
//   ]
console.log('-------------------------');

// Create new Teacher from Teacher's data
let data = {
    name: {
        first: "John",
        last: "Doe"
    },
    image: "string",
    dateOfBirth: "31.12.2020",
    emails: [
        {
            "email": "aaa@aaa.com",
            "primary": true
        },
        {
            "email": "bbb@bbb.com",
            "primary": false
        }
    ],
    phones: [
        {
            "phone": "85868866586",
            "primary": true
        }
    ],
    sex: "male",
    subjects: [
        {
            "subject": "string"
        }
    ],
    
}
const teachers = new TeachersModel();

// Create a new teacher
const teacherId = teachers.add(data);

// will return Teachers data including teacher's id
teachers.read(teacherId)

// // will update Teacher. This method should use the same validation as a constructor method
const teacherId = teachers.update(teacherId, updatedProfile)

// // will remove techer
teachers.remove(teacherId)