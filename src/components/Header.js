import React from 'react';
import { Button, Menu, Container } from 'semantic-ui-react';

class Header extends React.Component {
	render () {
		return (
			<div>

				<Menu style={{margin: 15}} color={'green'} inverted stackable>
					<Menu.Item>
						<a href='/'><img width='50' height='30' src="/vectorpaint.svg" /></a>
						
					</Menu.Item>

					{ /*<Menu.Item>
						
					</Menu.Item>*/}
					
					
					<Menu.Menu position='right'>
						<Menu.Item as='a' href='#'>
							Все доски
						</Menu.Item>
						
					</Menu.Menu>
				</Menu>
			</div>
		)
	}
}

export default Header;