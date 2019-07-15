import React from 'react';

import {connect} from 'react-redux'

import {BrowserRouter, Route} from 'react-router-dom'
import {PrivateRoute} from '../utils/PrivateRoute'

import Boards from '../containers/Boards'
import Header from './Header' 
import {About} from './About'
import Signin from '../containers/Signin'
import Signup from '../containers/Signup'

class App extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Route path='/signin/' component={Signin} />
					<Route path='/signup/' component={Signup} />
					<PrivateRoute isLogin={this.props.isLogin} path='/' exact component={Boards} />	
					<PrivateRoute isLogin={this.props.isLogin} path='/boards' component={Boards} />
					<Route path='/about/' component={About} />	
				</BrowserRouter>
			</div>
		)
	}
}

const mapToStateProps = state => {
	return {
		isLogin: state.user.user ? true : false,
	}
}
export default connect(mapToStateProps)(App);