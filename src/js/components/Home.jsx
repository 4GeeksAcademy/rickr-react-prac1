import { useState, useEffect } from "react";


// useState hook  - handle state (dynamic data) in a react app
// useEffect hook - handles side-effects
//	a side-effect is: any external system that you want your component to be
//					  synchronized with.

// Some things that you want your component to be synced with are:
//	- APIs -> backend with DB to make RESTful queries
//  - connecting to a server (ie: chat server)
//	- trigger some animations
//	- control modal dialogs
//  - track element visibility


// When we talk about rendering onto a screen, think of 3 steps:
// 1. mount (intial render - component is drawn for the first time)
// 2. update (re-render - the component is updated to show latest state)
// 3. unmount (when the component is removed from the page)


//create your first component
const Home = () => {
	const [toggle, setToggle] = useState(true);
	const [name, setName] = useState('Rick');

	const handleToggle = () => {
		setToggle(!toggle);
	};

  return <Toggler toggle={toggle} onToggle={handleToggle} />;
};

const Toggler = ({ toggle, onToggle }) => {

	// this type of useEffect runs on mount and on update
	// useEffect(() => {
	// 	console.log('I run on every render: mount + update')
	// });

	// a second way to use useEffect is to run ONLY on mount
	// useEffect(() => {
	// 	console.log('I run only on the first render (mount).')
	// }, []) // <-- [] is the dependency array

	// a third way to use useEffect is to run on mount and update
	// but in a different way, using the dependency array
	// useEffect(() => {
	// 	console.log('I run on updates if the toggle changes state based on the dependency array (and on mount)')
	// }, [toggle]);

	const [timer, setTimer] = useState(0);

	// a fourth way to use useEffect is to clean up the prior effect using
	// a `return` statement
	useEffect(() => {
		const interval = setInterval(() => {setTimer(timer + 1)}, 1000);
		console.log(timer);

		return () => clearInterval(interval);
	}, [timer])


	return (
		<div>
		<button type="button" onClick={onToggle}>
			Toggle
		</button>

		{toggle && <div>Hello React</div>}
		<div>{timer}</div>
		</div>
	);
};

export default Home;
