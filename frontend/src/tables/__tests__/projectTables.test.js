// import axios from 'axios';
// import { render, screen, waitFor } from '@testing-library/react'
// import AdminIndex from '../../views/admin/adminIndex'

// jest.mock(axios);

const dummyProjects = [
    {
        _id: 12345,
        title: 'dummyProject',
        description: 'This is a dummy Proj',
        deadline: '12/12/12',
        status: 'Completed'
    },
    {
        _id: 123456,
        title: 'Notsodummy',
        description: 'This is actually cap',
        deadline: '12/23/34',
        status: 'Nostatus'
    }
]

import axios from 'axios';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
jest.mock('axios');

const data = {
    data: {
        hits: [
            {
                objectID: '1',
                title: 'a',
            },
            {
                objectID: '2',
                title: 'b',
            },
        ],
    },
};

describe('fetchData', () => {
    it('fetches successfully data from an API', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
    });

    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';

        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
    });
});