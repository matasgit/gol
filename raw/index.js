const WIDTH = 150;
const HEIGHT = 50;
const STARTING_CELLS = 1000;

const initGrid = (width, height, startingCells) => {
	const _grid = [];
	const randCells = [];
	let cellIndex = 0;

	//TODO all rand numbers should be unique
	for(i = 1; i <= startingCells; i++)
	{
		randCells.push(Math.floor(Math.random() * (width * height)));
	}

	for(r = 0; r < height; r++)
	{
		_grid[r] = [];
		
		for(c = 0; c < width; c++)
		{
			let char = ' ';
			if(randCells.includes(cellIndex) === true){
				char = 'o';
			}
			_grid[r][c] = char;

			cellIndex++;
		}
	}

	return _grid;
}

const drawGrid = (grid) => {
	const tempGrid = [];
	for(r = 0; r < grid.length; r++)
	{	tempGrid[r] = [];	
		for(c = 0; c < grid[0].length; c++)
		{
			tempGrid[r][c] = drawCell(grid, r, c);
		}
	}

	return tempGrid;
}

const drawCell = (grid, r, c) => {
	let char = ' ';
	const isAlive = (grid[r][c] == 'o');
	let aliveNeighbours = 0;

	if(grid[r-1] !== undefined && grid[r-1][c-1] !== undefined && grid[r-1][c-1] == 'o'){
		aliveNeighbours++;
	}
	if(grid[r-1] !== undefined && grid[r-1][c] !== undefined && grid[r-1][c] == 'o'){
		aliveNeighbours++;
	}
	if(grid[r-1] !== undefined && grid[r-1][c+1] !== undefined && grid[r-1][c+1] == 'o'){
		aliveNeighbours++;
	}
	if(grid[r] !== undefined && grid[r][c-1] !== undefined && grid[r][c-1] == 'o'){
		aliveNeighbours++;
	}
	if(grid[r] !== undefined && grid[r][c+1] !== undefined && grid[r][c+1] == 'o'){
		aliveNeighbours++;
	}
	if(grid[r+1] !== undefined && grid[r+1][c-1] !== undefined && grid[r+1][c-1] == 'o'){
		aliveNeighbours++;
	}
	if(grid[r+1] !== undefined && grid[r+1][c] !== undefined && grid[r+1][c] == 'o'){
		aliveNeighbours++;
	}
	if(grid[r+1] !== undefined && grid[r+1][c+1] !== undefined && grid[r+1][c+1] == 'o'){
		aliveNeighbours++;
	}

	if(isAlive){
		if(aliveNeighbours == 2 || aliveNeighbours == 3){
			char = 'o';
		}
	}
	else{
		if(aliveNeighbours == 3){
			char = 'o';
		}
	}

	return char;
}

const arrayToString = (grid) => {
	let string = '';

	for(r = 0; r < grid.length; r++)
	{		
		for(c = 0; c < grid[0].length; c++)
		{
			string += grid[r][c];
		}
		string += '\n';
	}

	return string;
}

//-------------------------------------------------------------------------------------------------

let grid = initGrid(WIDTH, HEIGHT, STARTING_CELLS);
console.log(arrayToString(grid));

setInterval(() => {

	console.clear();
	grid = drawGrid(grid);
	console.log(arrayToString(grid));

}, 1000);
