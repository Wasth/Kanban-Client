import React from 'react';
import {connect} from 'react-redux'
import {Container, Card, Segment, Dimmer, Loader, Icon, Button, Header, Input, Dropdown, Grid, Label, Confirm} from 'semantic-ui-react'
import { getBoards, addBoard, updateBoard } from '../actions/boardsActions'

class Boards extends React.Component {
	componentDidMount(){
		console.log('Load boards...');
		if(this.props.token) {
			this.props.loadBoards(this.props.token);		
		}
	}
	constructor(props) {
		super(props);
		this.colors = [
			{
				value: '#FFF',
				text: 'White'
			},
			{
				value: '#000',
				text: 'Black'
			},
			{
				value: '#db2828',
				text: 'Red'
			},
			{
				value: '#fbbd08',
				text: 'Yellow'
			},
			{
				value: '#21ba45',
				text: 'Green'
			},
			{
				value: '#2185d0',
				text: 'Blue'
			},
			{
				value: '#a333c8',
				text: 'Purple'
			},
			{
				value: '#767676',
				text: 'Grey'
			},
		]
		this.state = {
			isForm: false,
			formAction: 'create',
			name: '',
			color: '#000',
			id: '',
			showConfirm: false,
		}
	}
	toggleForm(data = null){
		if(data !== null){
			this.setState({
				name: data.name,
				color: data.color,
				id: data.id,
				formAction: 'update',
			});
		}else {
			this.setState({
				name: '',
				color: '#000',
			});
		}
		
		this.setState({
			isForm: !this.state.isForm
		});
	}
	sendForm(){
		if(this.state.formAction == 'create') {
			this.props.addBoard(this.state.name, this.state.color, this.props.token, () => this.toggleForm());	
		}
		else if(this.state.formAction == 'update') {
			this.props.updateBoard(this.state.id, this.state.name, this.state.color, this.props.token, () => this.toggleForm());
		}
		this.toggleConfirm();
	}
	dropdownHandler(e, data){
		this.setState({
			color: data.value
		});
	}
	inputHandler(e){
		this.setState({
			name: e.currentTarget.value
		});
	}
	toggleConfirm() {
		this.setState({
			showConfirm: !this.state.showConfirm
		});
	}
	render() {
		const boardState = this.props.boardState;
		if(this.state.isForm) {
			return <div>
			<Container>
				<Segment>
					<Dimmer className='board-dimmer' active={boardState.isFetching}>
			        	<Loader>Loading</Loader>
			      	</Dimmer>
			      	<Confirm open={this.state.showConfirm} content={this.state.formAction == 'create' ? 'Are you really want to create a new board?' : 'Are you really want to change this board?'} onCancel={() => this.toggleConfirm()} onConfirm={() => this.sendForm()} />
			      	<h3>{ this.state.formAction === 'create' ? 'Create a new board' : 'Let\'s edit board'  }</h3>
					<Grid className='add-board-grid'>
						
						<Grid.Row columns={2}>
							<Grid.Column>
								<Input fluid placeholder='Board name' value={this.state.name} onChange={(event) => this.inputHandler(event)} />
								{boardState.error.name ? <div className="form-error">{boardState.error.name}</div>: ''}
							</Grid.Column>
							<Grid.Column>
								<Dropdown
									style={{boxShadow: '0 3px 0 0'+this.state.color}}
									onChange={(event, data) => this.dropdownHandler(event, data)}
								    placeholder='Select color'
								    selection
								    fluid
								    value={this.state.color}
								    options={this.colors}
							  /></Grid.Column>
						</Grid.Row>
						<Grid.Row  columns={2}>
							<Grid.Column>
								<Button fluid onClick={() => this.toggleForm()} color='red'><Icon name='close' /> Close</Button>
				      			
							</Grid.Column>
							<Grid.Column>
								<Button color='green' onClick={() => this.toggleConfirm()} fluid>
									<Icon name='checkmark'></Icon>
									Save 
								</Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
		      		<div>
	      				
		      			
		      			
				  	</div>
			    </Segment>
			</Container>
		</div>
		}
		return <div>
			<Container>
				<Segment>
			      	<Dimmer className='board-dimmer' active={boardState.isFetching}>
			        	<Loader>Loading</Loader>
			      	</Dimmer>
			      	<Header as="h2" textAlign="center">My Boards</Header>
			      	{boardState.error}	
			      	<div className="boards-wrapper">
			      		<Button onClick={() => this.toggleForm()} className='add-board' color='green' inverted><Icon name='plus' size='big'></Icon></Button>
			      		

			      		{
							this.props.boardState.boards.map((el, i) => {
								return <Card key={el.id}>
									<Card.Content className='board'>
										
								        	<Label attached='top'>
								        		<Icon onClick={() => this.toggleForm({
								        			name: el.name,
								        			color: el.color,
								        			id: el.id,
								        		})} name='pencil alternate' />
								        		<Icon name='delete' />
								        	</Label>
								        	{el.name}
										<div className="line" style={{backgroundColor: el.color}}></div>
								       
									</Card.Content>
								</Card>
							})
						}
			      	</div>
			      	
			    </Segment>
			</Container>
		</div>
	}
}

const mapStateToProps = store => {
	return {
		boardState: store.boards,
		token: store.user.user.token
	}
}
const mapDispatchToProps = dispatch => {
	return {
		loadBoards: (token) => dispatch(getBoards(token)),
		addBoard: (name, color, token, toggleForm) => dispatch(addBoard(name, color, token, toggleForm)),
		updateBoard: (id, name, color, token, toggleForm) => dispatch(updateBoard(id, name, color, token, toggleForm)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);