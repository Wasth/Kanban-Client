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

	return state;
}