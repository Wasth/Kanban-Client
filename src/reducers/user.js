const initialState = {
	isFetching: false,
	error: false,
	user: false,
	moveToSignup: false,
}

export function userReducer(state = initialState, action){
	if(action.type === 'SIGN_REQUEST') {
		return {...state, 
			isFetching: false,
			error: false,
			user: false,
		}
	}
	if(action.type === 'SIGN_FAILED'){
		return {
			isFetching: false,
			error: action.payload,
			user: false,
		}
	}
	if(action.type === 'SIGNIN_SUCCESS'){
		return {
			...state,
			isFetching: false,
			error: false,
			user: {
				token: action.payload.token,
				username: action.payload.username,
			},
		}
	}
	if(action.type === 'SIGNUP_SUCCESS'){
		return {
			...state,
			isFetching: false,
			error: false,
			moveToSignup: true,
		}
	}
	if(action.type === 'LOGOUT'){
		return initialState
	}
	return state;
}