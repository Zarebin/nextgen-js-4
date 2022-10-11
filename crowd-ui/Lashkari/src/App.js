import React from 'react';
import { UserRegister } from './features/user/UserRegister';
import './App.css';
import {FoodFact} from './features/foodFact/foodFact';
import {UserLogout} from './features/user/UserLogout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {UserLogin} from './features/user/UserLogin';
import {Dashboard} from './components/dashboard';

function App() {
  return (
	  <Router>
		<Routes>
			<Route path='/' element={<UserLogin />} />
			<Route path='/logout' element={<UserLogout />} />
			<Route path='/register' element={<UserRegister />} />
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/foodFact' element={<FoodFact />} />
	    </Routes>
	  </Router>
  );
}

export default App;
