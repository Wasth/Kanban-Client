import React from 'react';
import { Card } from 'semantic-ui-react';


export default function Task({name, color}) {
	return <Card>
		<Card.Content>
			<div className="circle" style={{backgroundColor: color}}></div>
			{name}
		</Card.Content>
	</Card>
}