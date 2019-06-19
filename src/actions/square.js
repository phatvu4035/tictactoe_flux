import * as types from '../constants';
import SquareDispatcher from './SquareDispatcher';

export const squareUpdate = (i) => {
    SquareDispatcher.dispatch({
        type: types.UPDATE_SQUARE,
        ind: i
    })
}
