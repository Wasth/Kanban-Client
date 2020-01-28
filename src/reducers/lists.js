const initalState = {
	isFetching: false,
	error: false,
	lists: [],
}


export function listsReducer(state = initalState, action){
	if(action.type === 'LISTS_REQUESTS') {
		return {...state,
			isFetching: true,
			error: false,
		}
	}

	if(action.type == 'GET_LISTS_SUCCESS') {
		return {...state,
			isFetching: false,
			error: false,
			lists: action.payload
		}
	}

	if(action.type == 'GET_LISTS_FAILED') {
		return {...state,
			isFetching: false,
			error: action.payload,
		}
	}

	if(action.type == 'LIST_REORDER_REQUEST') {
		console.log('client reorder')
		let copy = Array.from(state.lists);
		const source = copy.filter(l => l.id == action.payload.listId)[0]['sort']
		let [removed] = copy.splice(source, 1);
		copy.splice(action.payload.destination, 0, removed);
		return {
			...state,
			lists: copy,
		}
	}

	if(action.type == 'REORDER_LISTS') {
		console.log('reload')
		console.log(state.lists.map(l => {
				l.sort = action.payload[l.id]
				return l
			}))
		return {
			...state,
			lists: state.lists.map(l => {
				l.sort = action.payload[l.id]
				return l
			})
		}
	}

	return state;
}