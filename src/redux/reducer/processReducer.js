import { actionTypes } from '../actionTypes/actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = [{
    id: uuidv4(),
    name: 'Process1',
    description: 'sample process for practice',
    status: 'running',
    startDate: '12/12/2022',
    reason: 'emergency requirement',
}];

export const processReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.CREATE_PROCESS:
            return payload
                ? [
                    ...state,
                    {
                        id: uuidv4(),
                        name: payload.name,
                        description: payload.description,
                        status: 'pending',
                        startDate: '',
                        reason: '',
                    },
                ]
                : state;

        case actionTypes.UPDATE_PROCESS:
            const { id, ...updatedProcess } = payload;
            console.log(payload)
            const updatedProcesses = state.map((process) =>
                process.id === id ? { ...process, ...updatedProcess } : process
            );
            return updatedProcesses;

        default:
            return state;
    }
};