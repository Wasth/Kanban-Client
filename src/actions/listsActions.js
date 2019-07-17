import { baseUrl, newForm } from '../utils/apihost'

export function loadLists(boardId, token){
	return function(dispatch) {
		dispatch({
			type: 'LISTS_REQUEST'
		})
		fetch(baseUrl+'list/'+boardId, {
			headers: {
				'token': token
			},
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			if(data) {
				dispatch({
					type: 'GET_LISTS_SUCCESS',
					payload: data.lists
				})	
			}
		})
	}
}