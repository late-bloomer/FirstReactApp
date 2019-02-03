import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	// state = {
	// 	// counters:[<Counter />, <Counter />, <Counter />, <Counter />],
	// 	//or
	// 	counters: [
	// 		{ id: 0, value: 3 },
	// 		{ id: 1, value: 0 },
	// 		{ id: 2, value: 4 },
	// 		{ id: 3, value: 0 },
	// 		{ id: 4, value: 0 }
	// 	]
	// };

	// handleDelete = counterId => {
	// 	console.log("Handle delete...." + counterId);
	// 	// for (let i = 0; i < this.state.counters.length; i++) {
	// 	// 	if (this.state.counters[i].id === counterId) {
	// 	// 		console.log(
	// 	// 			"Obj having id" + this.state.counters[i].id + " has been deleted !!!!"
	// 	// 		);
	// 	// 		this.state.counters.splice(i, 1);
	// 	// 		this.setState({ counters: this.state.counters });

	// 	// 		break;
	// 	// 	}
	// 	// }

	// 	// or

	// 	const counter = this.state.counters.filter(c => c.id !== counterId);
	// 	this.setState({ counters: counter });
	// };

	// handleReset = () => {
	// 	console.log("Handle reset....");
	// 	const counters = this.state.counters.map(c => {
	// 		c.value = 0;
	// 		return c;
	// 	});
	// 	this.setState({ counters: counters });
	// };

	// handleIncrement = counter => {
	// 	console.log("handle increment......" + counter);
	// 	const counters = [...this.state.counters];
	// 	const index = counters.indexOf(counter);
	// 	counters[index].value = counters[index].value + 1;
	// 	this.setState({ counters: counters });
	// };

	render() {
		return (
			// <div>
			// 	<Counter />
			// 	<Counter />
			// 	<Counter />
			// 	<Counter />
			// 	<Counter />
			// </div>

			// or

			// <div>
			//     {this.state.counters.map(count => count)}
			// </div>

			// <div>
			// 	{this.state.counters.map(counter => (
			// 		<Counter
			// 			key={counter.id}
			// 			value={counter.value}
			// 			id={counter.id}
			// 			onDelete={this.handleDelete}
			// 		>
			// 			{/* <h4>Counter # {counter.id}</h4> */}
			// 		</Counter>
			// 	))}
			// </div>

			// or

			<div>
				<button className="btn btn-primary m-2" onClick={this.props.onReset}>
					Reset
				</button>
				{this.props.counters.map(counter => (
					<Counter
						key={counter.id}
						counter={counter}
						onDelete={this.props.onDelete}
						onIncrement={this.props.onIncrement}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
