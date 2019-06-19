import SquareDispatcher from './SquareDispatcher';
import * as types from '../constants';
import {ReduceStore} from 'flux/utils';
import {calculateWinner} from '../helpers/functions';

class squareStore extends ReduceStore {
    constructor(props) {
        super(SquareDispatcher);
    }

    getInitialState() {
        return {
            squares: Array(9).fill(null),
            xIsNext: true,
            finished: null,
        }
    }

    reduce(state, action) {
        switch (action.type) {
            case types.UPDATE_SQUARE:
                let ind = action.ind;
                let squares = state.squares.slice();
                let xIsNext = state.xIsNext;
                let finished = state.finished;
                if(calculateWinner(squares) || squares[ind]) {
                    finished = true;
                    return {
                        ...state, squares: squares, xIsNext: !xIsNext, finished: finished
                    }
                }
                squares[ind] = state.xIsNext ? 'X' : 'O';
                return {
                    ...state, squares: squares, xIsNext: !xIsNext, finished: finished
                }
            default:
                return state;
        }
    }

}
export default new squareStore();
