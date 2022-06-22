const Project = require( '../../models/project');

const fakeProjectData = {
    title: 'Dummy',
    description: 'Dummy Project',
    status: 'In-progess',
    started: '2022-06-07T11:41:25.241+00:00',
    deadline: '2022-06-07T11:41:25.241+00:00'
};

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

describe('Project controller testing', () => {
    test('Creating a new project', async () => {
        const validProject = new Project({
            title: fakeProjectData.title,
            description: fakeProjectData.description,
            status: fakeProjectData.status,
            started: fakeProjectData.started,
            deadline: fakeProjectData.deadline
        });
        const savedProject = await validProject.save();

        //indiv tests
        validateNotEmpty(savedProject);
        validateStringEquality(savedProject.title ,fakeProjectData.title);
        validateStringEquality(savedProject.description ,fakeProjectData.description);
        validateStringEquality(savedProject.status ,fakeProjectData.status);
    });

    test('should validate MongoError duplicate error with code 11000', async () => {
        const validProject = new Project({
            local: fakeProjectData
        });

        try{
            await validProject.save();
        }
        catch(error){
            const { name, code } = error;
            validateMongoDuplicationError(name, code);
        }
    })
});

describe('Dummy testcase', () => {
    test('Dummy', () => {
        expect(5).toBe(5);
    })
})