import TaskActionTypes from './TaskActionTypes';
import AppDispatcher from './AppDispatcher';

const Actions = {
    addTask(task) {
        AppDispatcher.dispatch({
            type: TaskActionTypes.ADD_TASK,
            task
        });
    },
    taskFormChange(newFormState) {
        AppDispatcher.dispatch({
            type: TaskActionTypes.TASK_FORM_CHANGE,
            newFormState
        });
    }
}

export default Actions;