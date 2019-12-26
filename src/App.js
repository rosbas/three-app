import React from 'react';
import Sample from './Sample';
import { Canvas } from 'react-three-fiber';
import Thing from './BoxGeometry';

function App() {
	return (
		<div className="App">
			<p>Morning lads</p>
			<Sample name="Ryu" age="25" status="Alive" />
			<Sample name="PAPApopi" age="23" status="Dead" />
			<Canvas>
				<Thing />
			</Canvas>
		</div>
	);
}

export default App;
