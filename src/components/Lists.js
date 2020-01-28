import React from 'react';

import { Card } from 'semantic-ui-react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Lists({lists, addList, addTask, deleteList, deleteTask, reorderList, reorderTask}) {
	return <DragDropContext onDragEnd={(r) => {
		console.log(r);
		reorderList(r.draggableId.replace('listdragg', ''), r.destination.index);
		console.log('done');
	}}>
    			<Droppable direction="horizontal" droppableId='listsdropp'>
        			{(provided, snapshot) => (
					<div {...provided.droppableProps} ref={provided.innerRef} className="lists-wrapper">	
	        			{lists.lists.map((el, i) => (
	        				<Draggable key={el.id} draggableId={'listdragg'+el.id} index={i} >
	        					{(provided, snapshot) => (
	        						<div className='list' {...provided.draggableProps}
              							{...provided.dragHandleProps} ref={provided.innerRef}>

	        						<Card>
						        		<Card.Content>
						        			<h3>id{el.id} - s{el.sort}</h3>
						        			<hr />
						        			task 11<br />
						        			task 12<br />
						        			task 13<br />
						        			task 14<br />
						        		</Card.Content>
						        	</Card>
						        	</div>
        						)}
				        	</Draggable>
        				))}
        				{provided.placeholder}
					</div>
					)}
				</Droppable>
			</DragDropContext>
}