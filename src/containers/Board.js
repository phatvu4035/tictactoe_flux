import Board from '../components/Board';
import {Container} from 'flux/utils';
import SquareStore from '../actions/SquareStore';
import {squareUpdate} from '../actions/square';

function getStores() {
    return [
        SquareStore
    ]
}

function getState() {
    return {
        squares: SquareStore.getState().squares,
        xIsNext: SquareStore.getState().xIsNext,
        finished: SquareStore.getState().finished,
        updateSquare: squareUpdate
    }
}

export default Container.createFunctional(Board, getStores, getState);
