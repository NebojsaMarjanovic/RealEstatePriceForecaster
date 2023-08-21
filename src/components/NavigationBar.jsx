import {useState} from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
	return (
		<div className='topnav'>
			<Link to="/predvidiCenu" className="stavka"><i>Predvidite cenu</i></Link>
			<Link to ="/proceniNekretninu" className="stavka"><i>Procenite nekretninu</i></Link>
		</div>		
	);
}

export default NavigationBar;
