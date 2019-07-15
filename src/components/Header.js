import React from 'react';
import { Button, Menu, Container } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/userActions'

class Header extends React.Component {
	getMenu(){
		if(this.props.userState.user) {
			return (
				<React.Fragment>
					<Menu.Item position='right' as={Link} to='/'>
						Все доски
					</Menu.Item>
					<Menu.Item as={Button} onClick={() => this.props.logout()}>
						Выйти
					</Menu.Item>
				</React.Fragment>
			)
		}
		return (
				<React.Fragment>
					<Menu.Item position='right' as={Link} to='/signin/'>
						Войти
					</Menu.Item>
					<Menu.Item  as={Link} to='/signup/'>
						Регистрация
					</Menu.Item>
				</React.Fragment>
			)
	}
	render () {
		return (
			<div>

				<Container>
					<Menu className='main-menu' color={'green'} inverted stackable>
						<Menu.Item className='logo-item' as={Link} to={'/'}>
							<img width={'50'} src="/vectorpaint.svg" />
							KanbanX
						</Menu.Item>

						{this.getMenu()}
						<Menu.Item as={Link} to='/about/'>
							Обо мне
						</Menu.Item>	
					</Menu>
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
		logout: () => dispatch(logout())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);