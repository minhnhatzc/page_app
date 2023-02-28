import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Allpage from './pages/All';
import Design from './pages/Design';
import Mobilepage from './pages/Mobile';
import Supply from './pages/Supply';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/all' element={<Allpage/>} />
		<Route path='/supply' element={<Supply/>} />
		<Route path='/mobile' element={<Mobilepage/>} />
		<Route path='/design' element={<Design/>} />
	</Routes>
	</Router>
);
}

export default App;

