import React from 'react'; // importing react package 
import ReactDOM from 'react-dom'; // importing react-dom package
import './index.css';// importing css pacakge 
// child component
class Square extends React.Component { // square component just renders a single button 
    constructor(props){
        super(props);
        this.state={ // normally to remember states in react uses this.state
            value:null,
        }
    }
    render() {
      return (
        <button className="square" onClick={()=>this.setState({value:"X"})}>
          {this.state.value}
        </button>
      );
    }
}
// parent component
class Board extends React.Component { // the board renders 9 squares 
    constructor(props){
        super(props);
        this.state={
            squares: Array(9).fill(null)
        }

    }
    renderSquare(i) { // passing values from the board to the square using props 
      return <Square 
      value={this.state.squares[i]}
      onClick={()=>this.handleclick(i)}    
      />;//in react information is passed using props
} 
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}
  
class Game extends React.Component { // the game component renders placeholder witha board with placeholder values 
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  