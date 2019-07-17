import React from 'react'
import {connect} from 'react-redux'

import { withRouter, Redirect } from 'react-router-dom'

import {Container, Card, Input, Button, Message, Label} from 'semantic-ui-react'

import {signin} from '../actions/userActions'


class Signin extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: 'user',
			password: 'password',
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
							<Input icon='user' iconPosition='left' disabled={userState.isFetching} placeholder='Username' onChange={this.usernameHandler} value={this.state.username} />
							{userState.error.username ? 
								<Label basic color='red' pointing>
							        {userState.error.username}
							    </Label>
								: ''}
							<Input icon='key' iconPosition='left' disabled={userState.isFetching} type='password' placeholder='Password' onChange={this.passwordHandler} value={this.state.password} />
							{userState.error.password ?
								<Label basic color='red' pointing>
							        {userState.error.password}
							    </Label> : ''}
							    <br />
							<Button loading={userState.isFetching} primary content='Sign in' 
							onClick={() => this.props.signin(this.state.username, this.state.password)}/>
					</Card.Content>
				</Card>
				</Container>
			</div>

		)
	}
}

const mapStateToProps = state => ({
	userState: state.user
})
const mapDispatchToProps = dispatch => ({
	signin: (username, password) => dispatch(signin(username, password))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin))