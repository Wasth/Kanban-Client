import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loadLists } from '../actions/listsActions';

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
			      	<h2>
		        		Your lists
		        	</h2>
		        	<div className="lists-wrapper">	

	        			{/*<div>*/}
	        				<Card className='list'>
			        		<Card.Content>
			        			<h3>List name</h3>
			        			<hr />
			        			task <br />
			        			task <br />
			        			task <br />
			        			task <br />
			        		</Card.Content>
			        	</Card>

			        	<Card className='list'>
			        		<Card.Content>
			        			<h3>List name</h3>
			        			<hr />
			        			task <br />
			        			task <br />
			        			task <br />
			        			task <br />
			        		</Card.Content>
			        	</Card>

			        	<Card className='list'>
			        		<Card.Content>
			        			<h3>List name</h3>
			        			<hr />
			        			task <br />
			        			task <br />
			        			task <br />
			        			task <br />
			        		</Card.Content>
			        	</Card>

			        	<Card className='list'>
			        		<Card.Content>
			        			<h3>List name</h3>
			        			<hr />
			        			task <br />
			        			task <br />
			        			task <br />
			        			task <br />
			        		</Card.Content>
			        	</Card>

			        	<Card className='list'>
			        		<Card.Content>
			        			<h3>List name</h3>
			        			<hr />
			        			task <br />
			        			task <br />
			        			task <br />
			        			task <br />
			        		</Card.Content>
			        	</Card>

			        	<Card className='list'>
			        		<Card.Content>
			        			<h3>List name</h3>
			        			<hr />
			        			task <br />
			        			task <br />
			        			task <br />
			        			task <br />
			        		</Card.Content>
			        	</Card>

			        	<Card className='list'>
			        		<Card.Content>
			        			<h3>List name</h3>
			        			<hr />
			        			task <br />
			        			task <br />
			        			task <br />
			        			task <br />
			        		</Card.Content>
			        	</Card>
	        			</div>

		        	{/*</div>*/}
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