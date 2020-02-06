import { baseUrl, newForm } from '../utils/apihost'

export function createList(boardId, name, token) {
	return function(dispatch) {
		dispatch({
			type: 'LISTS_REQUEST'
		})
		fetch(baseUrl+'list/'+boardId, {
			method: 'POST',
			headers: {
				'token': token
			},
			body: newForm({
				name
			})
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			if(data) {
				dispatch({
					type: 'CREATED_LIST_SUCCESS',
					payload: {
						id: data.id,
						name: data.name,
						sort: data.sort,
					}
				});
			}
		})
	}
}

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
					dispatch(loadTasks(data.lists[i].id, token));
				}
			}
		})
	}
}

export function loadTasks(listId, token) {
	return function(dispatch) {
		fetch(baseUrl+'task/'+listId, {
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
