import { actionTypes } from "../actionTypes/actionTypes";

export const createProcess = (process) => {
    return {
        type: actionTypes.CREATE_PROCESS,
        payload: process
    }
}

export const updateProcess = (process) => {
    return {
        type: actionTypes.UPDATE_PROCESS,
        payload: process
    }
}