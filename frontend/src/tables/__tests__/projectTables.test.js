import axios from 'axios';
import {render, screen, waitFor} from '@testing-library/react'
import AdminIndex from '../../views/admin/adminIndex'

jest.mock(axios);

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

test('Get Mocked Resolved Value', async () => {
    axios.get.mockResolvedValue({data:dummyProjects})
    render(<AdminIndex/>);

    const dummyProjectList = await waitFor(() => screen.findAllByTestId("projectid"))
})