import React, { Component } from 'react';

class Sample extends Component {
	render() {
		//console.log(this.props);
		const { name, age, status } = this.props; //or we could hardcode them by using "this.props.name" to refer to props name.
		return (
			<div className="name">
				<div> Name: {name} </div>
				<div> Age: {age} </div>
				<div> Status: {status} </div>
			</div>
		);
	}
}

export default Sample;
