import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loadLists } from '../actions/listsActions';

import { Container, Segment, Dimmer, Loader, Card  } from 'semantic-ui-react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class Lists extends React.Component {
	componentDidMount(){
		console.log('Load lists');
		if(this.props.token) {
			this.props.loadLists(this.props.match.params.id, this.props.token);
		}
	}
	render() {
		const listsState = this.props.listsState;
		console.log(listsState);
		return (
			<Container>
				<Segment>
					<Dimmer className='board-dimmer' active={listsState.isFetching}>
			        	<Loader>Loading</Loader>
			      	</Dimmer>
			      	<h2>
		        		Your lists
		        	</h2>
		        	<DragDropContext onDragEnd={(r) => {console.log(r)}}>
	        			<Droppable direction="horizontal" droppableId='listsdropp'>
		        			{(provided, snapshot) => (
        					<div {...provided.droppableProps} ref={provided.innerRef} className="lists-wrapper">	
			        			{listsState.lists.map((el, i) => (
			        				<Draggable key={el.id} draggableId={'listgragg'+el.id} index={i} >
			        					{(provided, snapshot) => (
			        						<div className='list' {...provided.draggableProps}
                      							{...provided.dragHandleProps} ref={provided.innerRef}>

			        						<Card>
								        		<Card.Content>
								        			<h3>{el.name}</h3>
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
				</Segment>
			</Container>	
		)
	}
}

const mapStateToProps = store => ({
	listsState: store.lists,
	token: store.user.user.token
})
const mapDispatchToProps = dispatch => ({
	loadLists: (boardId, token) => dispatch(loadLists(boardId, token))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Lists));