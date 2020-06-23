import Immutable from 'immutable';
import TaskActionTypes from '../data/TaskActionTypes';
import data from '../data/tasks.json';

const taskReducer = (state = Immutable.List([...data.tasks]), action) => {
    switch (action.type) {
        case TaskActionTypes.ADD_TASK:
            if (!action.task.name) {
                return state;
            }
            return state.push({
                name: action.task.name,
                description: action.task.description,
                likes: 0
            });
        default:
            return state;
    }
};

export default taskReducer;