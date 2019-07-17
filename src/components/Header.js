import React from 'react';
import { Button, Menu, Container, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/userActions'

class Header extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			menu: false,
		}
	}
	getMenu(){
		if(this.props.userState.user) {
			return (
				<React.Fragment>
					<Menu.Item position='right' as={Link} to='/'>
						<Icon name='clipboard list' /> My boards
					</Menu.Item>
					<Menu.Item as={Button} onClick={() => this.props.logout()}>
						<Icon name='log out' /> Log out
					</Menu.Item>
				</React.Fragment>
			)
		}
		return (
				<React.Fragment>
					<Menu.Item position='right' as={Link} to='/signin/'>
						<Icon name='user' /> Sign in
					</Menu.Item>
					<Menu.Item  as={Link} to='/signup/'>
						<Icon name='user plus' /> Sign Up
					</Menu.Item>
				</React.Fragment>
			)
	}
	render () {
		return (
			<div>

				<Container>
					<Menu onClick={() => {
						this.setState({
							menu: !this.state.menu
						});
					}} borderless className={'main-menu '+(this.state.menu ? 'not' : 'hide')} color={'green'} inverted stackable>
						<Menu.Item className='logo-item'>
							<Link to='/'>
							<img width='35' src="/vectorpaint.svg" />
							KanbanX
							</Link>
							<div className='menu-toggler' onClick={() => {
								this.setState({
									menu: !this.state.menu
								});
							}}>
								<Icon name={'angle double '+(this.state.menu ? 'up' : 'down')} />
							</div>
						</Menu.Item>
						{this.getMenu()}
						<Menu.Item as={Link} to='/about/'>
							<Icon name='info' /> About me
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