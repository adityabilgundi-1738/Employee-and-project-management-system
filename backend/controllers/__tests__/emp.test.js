const Employee = require( '../../models/employee');

const fakeEmployeeData = {
    name: 'Dummy',
    password: 'Dummy Employee',
    email: 'fakeemail@gmail.com',
    level: 'Beginner',
    date: '2022-06-07T11:41:25.241+00:00',
    admin: 'false'
};

const fakeData2 = {
    name: 'Dummy',
    password: 'new passowrd',
    email: 'hellooo@reddif.com',
    level: 'Beginner'
}

const {
    validateNotEmpty,
    validateStringEquality,
    validateMongoDuplicationError
} = require('../../test_utils/validators.utils');

const {
    dbConnect,
    dbDisconnect
} = require( '../../test_utils/dbHandler.utils');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

//Create
describe('Create Employee', () => {
    test('Creating a new Employee Profile', async () => {
        const validEmployee = new Employee({
            name: fakeEmployeeData.name,
            password: fakeEmployeeData.password,
            email: fakeEmployeeData.email,
            level: fakeEmployeeData.level,
            date: fakeEmployeeData.date,
            admin: fakeEmployeeData.admin
        });
        const savedEmployee = await validEmployee.save();

        //individual tests
        validateNotEmpty(savedEmployee);
        validateStringEquality(savedEmployee.name, fakeEmployeeData.name);
        validateStringEquality(savedEmployee.password, fakeEmployeeData.password);
        validateStringEquality(savedEmployee.email, fakeEmployeeData.email);
        validateStringEquality(savedEmployee.level, fakeEmployeeData.level);
    });

    test('should validate MongoError duplicate error with code 11000', async () => {
        const validEmployee = new Employee({
            local: fakeEmployeeData
        });

        try{
            await validEmployee.save();
        }
        catch(error){
            const { name, code } = error;
            validateMongoDuplicationError(name, code);
        }
    });
})

// Read
// describe('Get an Employee', () => {
//     test('Read an Employee profile', async () => {
//         const readEmployeeData = Employee.findOne({email: 'fakeemail@gmail.com'})

//         validateNotEmpty(readEmployeeData);
//         validateStringEquality(readEmployeeData.name, fakeEmployeeData.name)
//         validateStringEquality(readEmployeeData.password, fakeEmployeeData.password);
//         validateStringEquality(readEmployeeData.email, fakeEmployeeData.email);
//         validateStringEquality(readEmployeeData.level, fakeEmployeeData.level);
//     })

//     test('should validate MongoError as no object found with code y', async () => {
//         try{
//             Employee.findOne({email: 'fakeemail@gmail.com'})
//             console.log(readEmployeeData)
//         }
//         catch(error){
//             const {name, code} = error;
//             validateMongoDuplicationError(name, code);
//         }
//     })
// })

// update
// describe('Update Employee', () => {
//     test('Update an Employee Profile', async() => {
//         const profiles = await Employee.find({email: 'fakemail@gmail.com'})
//         const oldProfile = {_id: profiles[0]._id}
//         const newData = {
//             name: fakeData2.name,
//             password: fakeData2.password,
//             email: fakeData2.email,
//             level: fakeData2.level
//         }
//         await Employee.updateOne(oldProfile,newData)

//         //testcases using a ForEach loop for each data
//         validateNotEmpty(newData);
//     })

//     test('should validate MongoError object not found with code x', () => {
//     })
// })

// delete
// describe('Delete Employee', () => {
//     test('Delete an Employee Profile', async() => {
//         const deletedData = await Employee.find({email: 'hellooo@reddif.com'})
//         const oldProfile = {_id: deletedData[0]._id}
//         const deleted = await Employee.deleteOne(oldProfile)

//         validateNotEmpty(deleted);
//         validateStringEquality(deleted.name, oldProfile.name);
//         validateStringEquality(deleted.password, oldProfile.password);
//         validateStringEquality(deleted.email, oldProfile.email);
//         validateStringEquality(deleted.level, oldProfile.level);
//     })

//     test('should validate MongoError object not found with code x', () => {
//     })
// })

describe('Dummy testcase', () => {
    test('Dummy', () => {
        expect(5).toBe(5);
    })
})