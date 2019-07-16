const initialState = {
	boards: [
		/*'Планы на жыыссь',
		'Планы на жыыссь',
		'Планы на жыыссь',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',
		'Кодинг',*/
	],
	isFetching: false,
	error: false,
};

export function boardsReducer(state = initialState, action){
	if(action.type == 'GET_BOARDS_REQUEST'){
		return {...state,
			boards: [],
			isFetching: true,
			error: false,
		}
	}
	if(action.type == 'BOARD_REQUEST') {
		return {...state,
			isFetching: true,
			error: false
		}
	}

	if(action.type == 'BOARD_FAILED'){
		return {...state,
			isFetching: false,
			error: action.payload,
		}
	}
	if(action.type == 'GET_BOARDS_SUCCESS'){
		return {...state,
			isFetching: false,
			error: false,
			boards: action.payload
		}
	}
	return state;
}