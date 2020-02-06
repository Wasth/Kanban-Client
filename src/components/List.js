import React from 'react';
import { Card } from 'semantic-ui-react';
import Tasks from './Tasks';

export default function List({id, name, remove, tasks, edit}) {
	return <Card>
				<Card.Content>
					<h3>{name}</h3>
					<Tasks 
						tasks={tasks}
						droppableId={id}
					/>
				</Card.Content>
			</Card>
}