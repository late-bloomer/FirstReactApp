import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: this.props.counter.value
		// tags: ["tag1", "tag2", "tag3", "tag4"]
		// image: "https://picsum.photos/200"
	};

	// style = {
	// 	fontSize: 50,
	// 	fontWeight: "bold"
	// };

	render() {
		console.log("props --- " + this.props);
		return (
			<div>
				{/* <img src={this.state.image} alt="" /> */}
				{/* <span style={this.style} className="badge badge-primary m-2"> */}
				{/* <span style={{ fontSize: 50 }} className="badge badge-primary m-2"> */}
				{/* <span className={this.getBatcgFormatter()}>{this.formatCount()}</span>
				<button className="btn btn-secondary btn-sm">increment</button>
				<ul>
					{this.state.tags.map(tag => (
						<li key={tag}>{tag}</li>
					))}
                </ul> */}
				{/* {this.state.tags.length === 0 ? "Please add the tag..." : null} */}
				{/* {this.state.tags.length === 0 && "Please add the tag..."}
                {this.renderTags()} 
				{this.props.children}*/}
				<span className={this.getBatchFormatter()}>{this.formatCount()}</span>
				{/* <button
					onClick={this.handleIncrement}
					className="btn btn-secondary btn-sm"
				>
					increment
                </button> */}
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm"
				>
					increment
				</button>
				<button
					className="btn btn-danger btn-sm m-2"
					onClick={() => this.props.onDelete(this.props.counter.id)}
				>
					Delete
				</button>
			</div>
		);
	}

	handleIncrement = () => {
		// make handleIncrement as arrow function as i want to access the "this".
		// in normal function which is called during event handling (like button click),
		// you can't access the "this" as it uses strict mode
		console.log("Item is clicked..." + this);
		this.setState({ count: this.state.count + 1 });
	};

	renderTags() {
		if (this.state.tags.length === 0) return <p>There is no item !!!!</p>;
		else
			return (
				<ul>
					{this.state.tags.map(tag => (
						<li key={tag}>{tag}</li>
					))}
				</ul>
			);
	}

	getBatchFormatter() {
		let classess = "badge m-2 badge-";
		classess += this.props.counter.value === 0 ? "warning" : "primary";
		return classess;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
