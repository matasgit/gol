import './Cell.css';

function Cell(props) {
	return (
		<div className = {props.isAlive === 'true' ? "Cell Cell--active" : "Cell"}>			
		</div>
	);
}

export default Cell;
