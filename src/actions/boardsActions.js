import { baseUrl, newForm } from '../utils/apihost'

export function getBoards(token){
	return function (dispatch) {
		dispatch({
			type: 'GET_BOARDS_REQUEST'
		})

		fetch(baseUrl+'board/', {
			headers: {
				'token': token
				},
		})
		.then(response => {
			return response.json()
			if(response.statusCode == 200) {
				
			}else {
				dispatch({
					type: 'BOARD_FAILED',
					payload: 'Error'
				})
			}
		})
		.then(data => {
			console.log(data)
			if(data) {
				dispatch({
					type: 'GET_BOARDS_SUCCESS',
					payload: data.boards
				})	
			}
		})
	}
}
export function addBoard(name, color, token, toggleForm){
	return function(dispatch){
		dispatch({
			type: 'BOARD_REQUEST'
		})

		fetch(baseUrl+'board/', {
			method: 'POST',
			headers: {
				'token': token
			},
			body: newForm({
				name: name,
				color: color,
			})
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			if(data.result == 1) {
				dispatch(getBoards(token));
				toggleForm();
			}else {
				dispatch({
					'type': 'BOARD_FAILED',
					payload: data.error
				})
			}
		})

		
	}
}

export function updateBoard(id, name, color, token, toggleForm){
	return function(dispatch){
		dispatch({
			type: 'BOARD_REQUEST'
		})

		fetch(baseUrl+'board/'+id, {
			method: 'PUT',
			headers: {
				'token': token
			},
			body: newForm({
				name: name,
				color: color,
			})
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			if(data.result == 1) {
				dispatch(getBoards(token));
				toggleForm();
			}else {
				dispatch({
					'type': 'BOARD_FAILED',
					payload: data.error
				})
			}
		})

		
	}
}

export function deleteBoard(id, token){
	return function(dispatch){
		dispatch({
			type: 'BOARD_REQUEST'
		})
		fetch(baseUrl+'board/'+id, {
			method: 'DELETE',
			headers: {
				'token': token
			},
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			if(data.result == 1) {
				dispatch(getBoards(token));
			}else {
				dispatch({
					'type': 'BOARD_FAILED',
					payload: data.error
				})
			}
		})
	}
}