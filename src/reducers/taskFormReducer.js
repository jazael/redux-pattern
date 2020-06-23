import TaskActionTypes from '../data/TaskActionTypes';

export const INITIAL_ADD_TASK_FORM_STATE = {
    name: '',
    description: ''
}

const taskFormReducer = (state = INITIAL_ADD_TASK_FORM_STATE, action) => {
    switch (action.type) {
        case TaskActionTypes.TASK_FORM_CHANGE:
            return action.newFormState;
        default:
            return state;
    }
}

export default taskFormReducer;