import React from 'react'
import {connect} from 'react-redux'

import {Container, Card, Input, Button, Label} from 'semantic-ui-react'

import { withRouter, Redirect } from 'react-router-dom'

import { signup } from '../actions/userActions'
class Signup extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			repeatPassword: '',
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
	repeatPasswordHandler = (e) => {
		this.setState({
			repeatPassword: e.currentTarget.value
		})
	}
	render() {
		const userState = this.props.userState;
		if(userState.moveToSignup) {
			return <Redirect to='/signin/'/>
		}
		return (
			<div>
				<Container className="form">
				<Card>
					<Card.Content>
						<h1>Sign Up</h1>
							<Input icon='user' iconPosition='left' disabled={userState.isFetching} placeholder='Username' onChange={this.usernameHandler} value={this.state.username} />
							{userState.error.username ? 
								<Label basic color='red' pointing>
							        {userState.error.username}
							    </Label> : ''}
							
							<Input icon='key' iconPosition='left' disabled={userState.isFetching} type='password' placeholder='Password' onChange={this.passwordHandler} value={this.state.password} />
							{userState.error.password ? 
								<Label basic color='red' pointing>
							        {userState.error.password}
							    </Label> : ''}

							<Input icon='key' iconPosition='left' disabled={userState.isFetching} type='password' placeholder='Repeat password' onChange={this.repeatPasswordHandler} value={this.state.repeatPassword} />
							{userState.error['repeated-password'] ? 
							<Label basic color='red' pointing>
							        {userState.error['repeated-password']}
						    </Label> : ''}
							
							<Button loading={userState.isFetching} primary content='Create an account' 
							onClick={() => this.props.signup(this.state.username, this.state.password, this.state.repeatPassword)}/>
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
		signup: (username, password, repeatPassword) => dispatch(signup(username, password, repeatPassword))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup))