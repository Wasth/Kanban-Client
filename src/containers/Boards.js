import React from 'react';
import {connect} from 'react-redux'
import {Container, Card} from 'semantic-ui-react'

class Boards extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {

		return <div>
			<Container>
				{
					this.props.boardState.boards.map((el, i) => {
						return <Card>
							<Card.Content>
										{i}
							</Card.Content>
						</Card>
					})
				}
			</Container>
		</div>
	}
}

const mapStateToProps = store => {
	return {
		boardState: store.boards
	}
}
export default connect(mapStateToProps)(Boards);