import React from 'react'
import {connect} from 'react-redux'

import {Container, Card, Input, Button} from 'semantic-ui-react'

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
						<h1>Регистрация</h1>
							<Input disabled={userState.isFetching} placeholder='Имя пользователя' onChange={this.usernameHandler} value={this.state.username} />
							{userState.error.username ? <p className='form-error'>{this.props.userState.error.username}</p> : ''}
							
							<Input disabled={userState.isFetching} type='password' placeholder='Пароль' onChange={this.passwordHandler} value={this.state.password} />
							{userState.error.password ? <p className='form-error'>{userState.error.password}</p> : ''}

							<Input disabled={userState.isFetching} type='password' placeholder='Повторите пароль' onChange={this.repeatPasswordHandler} value={this.state.repeatPassword} />
							{userState.error['repeated-password'] ? <p className='form-error'>{userState.error['repeated-password']}</p> : ''}
							
							<Button loading={userState.isFetching} primary content='Создать аккаунт!' 
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