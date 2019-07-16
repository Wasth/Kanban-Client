import React from 'react'
import {Container, Card, Label, Icon} from 'semantic-ui-react'
export function About (props) {
	let social = [
		{
			color: 'red',
			icon: 'reddit',
			text: 'Reddit',
			url: 'https://www.reddit.com/user/tarsss/'
		},
		{
			color: 'black',
			icon: 'github',
			text: 'Github',
			url: 'https://github.com/Wasth'
		},
		{
			color: 'black',
			icon: 'steam',
			text: 'Steam',
			url: 'https://steamcommunity.com/id/tarsss'
		},
		{
			color: 'blue',
			icon: 'vk',
			text: 'Vkontakte',
			url: 'https://vk.com/t_ars'
		},
		{
			color: 'blue',
			icon: 'telegram plane',
			text: 'Telegram',
			url: 'https://t.me/tars1337'
		},
		{
			color: 'purple',
			icon: 'instagram',
			text: 'Instagram',
			url: '#'
		},
		{
			color: 'grey',
			icon: 'mail',
			text: 'E-mail',
			url: 'mailto:riasta@yandex.ru'
		},
	]
	return <Container>
		<Card style={{width: '100%'}}>
			<Card.Content>
				<h1>
					Welcome everyone!
				</h1>	
				<p>
					Hello! The name is Timur. I'm a junior full-stack web-developer.
					My favorite languages and frameworks are Python, Javascript, Django, Flask, React, Redux and other things related to Python and js :3
				</p>
				<p>
					Also, I know php a little and I knew Java a few years ago.
				</p>
				<p>
					I make this project for learning React stack and I'm excited about all this c:
				</p>
				<p>
					Propably, this projects have a lot "bad-code", bugs, issues but I'm an only learner {'>_<'}
				</p>
				<p>
					However, I hope, you like this Kanban-pet-project ^_^
				</p>
				<h3>
					My contacts
				</h3>
				<p>Feel free to write me</p>
				<div className='social-wrapper'>
				{social.map((el, i) => {
					return <span className='social-labels' key={i}>
								<a href={el.url}>
									<Label color={el.color} size='large'>
										<Icon name={el.icon} />
										{el.text}
									</Label>
								</a>
							</span>	
				})}
				</div>
			</Card.Content>
		</Card>
	</Container>
}