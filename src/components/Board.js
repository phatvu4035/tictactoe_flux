import React from 'react';
import Square from './Square';
import {calculateWinner} from '../helpers/functions';
const Board = (props) =>  {
    const winner = calculateWinner(props.squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (props.xIsNext ? 'X' : 'O');
    }
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square
                    value={props.squares[0]}
                    onclick={() => props.updateSquare(0)}
                />
                <Square
                    value={props.squares[1]}
                    onclick={() => props.updateSquare(1)}
                />
                <Square
                    value={props.squares[2]}
                    onclick={() => props.updateSquare(2)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={props.squares[3]}
                    onclick={() => props.updateSquare(3)}
                />
                <Square
                    value={props.squares[4]}
                    onclick={() => props.updateSquare(4)}
                />
                <Square
                    value={props.squares[5]}
                    onclick={() => props.updateSquare(5)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={props.squares[6]}
                    onclick={() => props.updateSquare(6)}
                />
                <Square
                    value={props.squares[7]}
                    onclick={() => props.updateSquare(7)}
                />
                <Square
                    value={props.squares[8]}
                    onclick={() => props.updateSquare(8)}
                />
            </div>
        </div>
    );
}
export default Board;
