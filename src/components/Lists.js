import React, { useRef } from 'react';

import { Card, Input, Button } from 'semantic-ui-react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import List from './List';

export default function Lists({lists, addList, editList, deleteList, reorderList}) {
	const newlistRef = useRef();
	return <DragDropContext onDragEnd={(r) => {
		console.log(r);
		if(r.draggableId.indexOf('listdragg') >= 0) {
			reorderList(r.draggableId.replace('listdragg', ''), r.destination.index);
		}
	}}>
		<Droppable type='list' direction="horizontal" droppableId='listsdropp'>
			{(provided, snapshot) => (
			<div {...provided.droppableProps} ref={provided.innerRef} className="lists-wrapper">	
    			{lists.lists.map((el, i) => (
    				<Draggable key={el.id} draggableId={'listdragg'+el.id} index={i} >
    					{(provided, snapshot) => (
    						<div className='list' {...provided.draggableProps}
      							{...provided.dragHandleProps} ref={provided.innerRef}>
				        		<List
				        			id={el.id} 
				        			name={el.name} 
				        			tasks={el.tasks || []} 
				        			edit={name => editList(el.id, name)} 
				        			remove={() => deleteList(el.id)}
			        			/>
				        	</div>
						)}
		        	</Draggable>
				))}
				{provided.placeholder}
				<div>
						<Input ref={newlistRef} placeholder='New list name' />
						&nbsp;&nbsp;&nbsp;
						<Button onClick={() => addList(newlistRef.current.inputRef.current.value)}>Создать</Button>
				</div>
			</div>
			)}
		</Droppable>
	</DragDropContext>
}