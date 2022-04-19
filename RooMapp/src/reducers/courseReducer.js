//code from this tutorial: https://github.com/iamshaunjp/react-context-hooks/blob/lesson-20/booklist/src/reducers/bookReducer.js
//https://github.com/iamshaunjp/react-context-hooks/blob/lesson-20/booklist/src/reducers/bookReducer.js
import { v4 as uuid } from 'uuid';

export const courseReducer = (state, action) => {
    switch (action.type) { //we check the type of the action to choose what to do
        case 'ADD_COURSE':
            return [...state, {
                name: action.course.name,
                classroom: action.course.classroom,
                id: uuid() //we generate a unique ID
            }
            ]
        case 'REMOVE_COURSE':
            return state.filter(course => course.id !== action.id);//if the item has that ID, it will filter it out; all are looped; if "course.id !== id" is true, it wont be removed
        default:
            return state;
    }
}

