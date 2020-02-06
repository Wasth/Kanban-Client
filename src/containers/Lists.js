import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loadLists, reorderList, createList } from '../actions/listsActions';
import ListsView from '../components/Lists';

import { Container, Segment, Dimmer, Loader, Card  } from 'semantic-ui-react';

class Lists extends React.Component {
	componentDidMount(){
		console.log('Load lists');
		if(this.props.token) {
			this.props.loadLists(this.props.match.params.id, this.props.token);
		}
	}
	render() {
		const listsState = this.props.listsState;
		return (
			<Container>
				<Segment>
					<Dimmer className='board-dimmer' active={listsState.isFetching}>
			        	<Loader>Loading</Loader>
			      	</Dimmer>
			      	<h2 className='lists-title'>
		        		{this.props.boardName}
		        	</h2>
		        	<ListsView 
		        		addList={(name) => this.props.addList(this.props.match.params.id, name, this.props.token)}
		        		reorderList={(lId, to, from) => this.props.reorderList(lId, to, this.props.token)} 
		        		lists={listsState} />
				</Segment>
			</Container>	
		)
	}
}

const mapStateToProps = store => ({
	listsState: store.lists,
	boardName: store.lists.boardName,
	token: store.user.user.token
})
const mapDispatchToProps = dispatch => ({
	loadLists: (boardId, token) => dispatch(loadLists(boardId, token)),
	addList: (boardId, name, token) => dispatch(createList(boardId, name, token)),
	reorderList: (listId, to, token) => {
		dispatch({
			type: 'LIST_REORDER_REQUEST',
			payload: {
				listId: listId,
				destination: to,
			}
		});
		dispatch(reorderList(listId, to, token));
	},

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Lists));