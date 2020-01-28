import React from 'react';

import {connect} from 'react-redux'

import {BrowserRouter, Route} from 'react-router-dom'
import {PrivateRoute} from '../utils/PrivateRoute'

import Boards from '../containers/Boards'
import Header from './Header' 
import {About} from './About'
import Signin from '../containers/Signin'
import Signup from '../containers/Signup'
import Lists from '../containers/Lists'

class App extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>

					<Header />

					<Route path='/signin/' component={Signin} />
					<Route path='/signup/' component={Signup} />
					<Route path='/about/' component={About} />	

					<PrivateRoute isLogin={this.props.isLogin} path='/' exact component={Boards} />	
					<PrivateRoute isLogin={this.props.isLogin} path='/boards' component={Boards} />
					<PrivateRoute isLogin={this.props.isLogin} path='/board/:id/lists' component={Lists} />

				</BrowserRouter>
			</div>
		)
	}
}

const mapToStateProps = state => ({
	isLogin: state.user.user ? true : false,	
})
export default connect(mapToStateProps)(App);