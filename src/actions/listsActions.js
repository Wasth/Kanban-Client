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
				});
				for(let i = 0; i < data.lists.length; i++) {
					loadTasks(data.lists[i].id, token);
				}
			}
		})
	}
}

export function loadTasks(listId, token) {
	return function(dispatch) {
		fetch(baseUrl+'list/'+listId, {
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
					type: 'GET_TASK_SUCCESS',
					payload: {
						listId, 
						tasks: data.tasks
					}
				});
			}
		})
	}
}



export function reorderList(listId, to, token) {
	return function(dispatch) {
		
		fetch(baseUrl+'list/'+listId+'/moveto/'+to, {
			method: 'PUT',
			headers: {
				'token': token
			},
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			if(data.result) {
				dispatch({
					type: 'REORDER_LISTS',
					payload: data.order
				})
			}
		}).catch(err => dispatch({type: 'FAILED_REORDER'}))
	}
}
