import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';

export default function Tasks({tasks, droppableId}) {
	return <Droppable type='task' droppableId={'tasksdropp'+droppableId}>
        			{(provided, snapshot) => (
					<div style={{
						backgroundColor: snapshot.isDraggingOver ? 'blue' : 'white'
					}} {...provided.droppableProps} ref={provided.innerRef} className="tasks-wrapper">	
	        			{tasks.map((el, i) => (
	        				<Draggable key={el.id} draggableId={'taskdragg'+el.id} index={i} >
	        					{(provided, snapshot) => (
	        						<div className='task' {...provided.draggableProps}
              							{...provided.dragHandleProps} ref={provided.innerRef}>
						        		<Task 
						        			name={el.task}
						        			color={el.color} 
						        			// tasks={el.tasks} 
						        			// edit={name => editList(el.id, name)} 
						        			// remove={() => deleteList(el.id)}
					        			/>
						        	</div>
        						)}
				        	</Draggable>
        				))}
    					{provided.placeholder}
    					<div className="test">adawd</div>
					</div>
					)}
				</Droppable>
}	