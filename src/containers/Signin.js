import React from 'react'
import {connect} from 'react-redux'

import { withRouter, Redirect } from 'react-router-dom'

import {Container, Card, Input, Button, Message} from 'semantic-ui-react'

import {signin} from '../actions/userActions'


class Signin extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
		}
	}
	usernameHandler = (e) => {
		this.setState({
			username: e.currentTarget.value
		})
	}
	passwordHandler = (e) => {
		this.setState({
			password: e.currentTarget.value
		})
	}
	render() {
		const userState = this.props.userState;
		if(userState.user) {
			return <Redirect to='/'/>
		}
		return (
			<div>
				<Container className="form">
				<Card>
					<Card.Content>
						<h1>Sign in</h1>
							<Input disabled={userState.isFetching} placeholder='Username' onChange={this.usernameHandler} value={this.state.username} />
							{userState.error.username ? <p className='form-error'>{this.props.userState.error.username}</p> : ''}
							<Input disabled={userState.isFetching} type='password' placeholder='Password' onChange={this.passwordHandler} value={this.state.password} />
							{userState.error.password ? <p className='form-error'>{userState.error.password}</p> : ''}
							<Button loading={userState.isFetching} primary content='Sign in' 
							onClick={() => this.props.signin(this.state.username, this.state.password)}/>
					</Card.Content>
				</Card>
				</Container>
			</div>

		)
	}
}

const mapStateToProps = state => {
	return {
		userState: state.user
	}
}
const mapDispatchToProps = dispatch => {
	return {
		signin: (username, password) => dispatch(signin(username, password))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin))