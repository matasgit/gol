import './Grid.css';
import Cell from './Cell';

function Grid(props) {

	const WIDTH = props.columns;
	const HEIGHT = props.rows;
	const STARTING_CELLS = props.startingCells;

	const initGrid = (width, height, startingCells) => {
		const _grid = [];
		const randCells = [];
		let cellIndex = 0;
	
		//TODO all rand numbers should be unique
		for(let i = 1; i <= startingCells; i++)
		{
			randCells.push(Math.floor(Math.random() * (width * height)));
		}
	
		for(let r = 0; r < height; r++)
		{
			_grid[r] = [];
			
			for(let c = 0; c < width; c++)
			{
				let isAlive = false;
				if(randCells.includes(cellIndex) === true){
					isAlive = true;
				}
				_grid[r][c] = isAlive;
	
				cellIndex++;
			}
		}
	
		return _grid;
	}

	const drawGrid = (grid) => {
		const tempGrid = [];
		for(let r = 0; r < grid.length; r++)
		{	tempGrid[r] = [];	
			for(let c = 0; c < grid[0].length; c++)
			{
				tempGrid[r][c] = drawCell(grid, r, c);
			}
		}
	
		return tempGrid;
	}

	const drawCell = (grid, r, c) => {
		let newIsAlive = false;
		const isAlive = grid[r][c];
		let aliveNeighbours = 0;
	
		if(grid[r-1] !== undefined && grid[r-1][c-1] !== undefined && grid[r-1][c-1]){
			aliveNeighbours++;
		}
		if(grid[r-1] !== undefined && grid[r-1][c] !== undefined && grid[r-1][c]){
			aliveNeighbours++;
		}
		if(grid[r-1] !== undefined && grid[r-1][c+1] !== undefined && grid[r-1][c+1]){
			aliveNeighbours++;
		}
		if(grid[r] !== undefined && grid[r][c-1] !== undefined && grid[r][c-1]){
			aliveNeighbours++;
		}
		if(grid[r] !== undefined && grid[r][c+1] !== undefined && grid[r][c+1]){
			aliveNeighbours++;
		}
		if(grid[r+1] !== undefined && grid[r+1][c-1] !== undefined && grid[r+1][c-1]){
			aliveNeighbours++;
		}
		if(grid[r+1] !== undefined && grid[r+1][c] !== undefined && grid[r+1][c]){
			aliveNeighbours++;
		}
		if(grid[r+1] !== undefined && grid[r+1][c+1] !== undefined && grid[r+1][c+1]){
			aliveNeighbours++;
		}
	
		if(isAlive){
			if(aliveNeighbours === 2 || aliveNeighbours === 3){
				newIsAlive = true;
			}
		}
		else{
			if(aliveNeighbours === 3){
				newIsAlive = true;
			}
		}
		return <Cell key = {r.toString() + c.toString()} row = {r.toString()} column = {c.toString()} isAlive = {newIsAlive.toString()} />;
	}

	let grid = initGrid(WIDTH, HEIGHT, STARTING_CELLS);
	grid = drawGrid(grid);
	
	return (
		<div className = 'Grid'>
			{grid}
		</div>
	);
}

export default Grid;
