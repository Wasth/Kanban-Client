import { baseUrl } from '../utils/apihost'

export function newForm(data){
	let formData = new FormData();
	for(let key in data) {
		formData.append(key, data[key])
	}
	return formData;
}

export function signin(username, password){
	return function(dispatch) {
		dispatch({
			type: 'SIGN_REQUEST',
		});

		

		fetch(baseUrl+'auth/signin', {
			method: 'POST',
			body: newForm({
				username: username,
				password: password,
			})
		})
		.then(response => {
			return response.json();
		})
		.then(data => {
			if(data.result == 1) {
				console.log(data)
				dispatch({
					type: 'SIGNIN_SUCCESS',
					payload: {
						token: data.token,
						username: username
					}
				});
			}else {
				dispatch({
					type: 'SIGN_FAILED',
					payload: data.error
				});
			}
		});
	}
}

export function signup(username, password, repeatPassword) {
	return function(dispatch) {
		dispatch({
			type: 'SIGN_REQUEST'
		});

		fetch(baseUrl+'auth/signup', {
			method: 'POST',
			body: newForm({
				username: username,
				password: password,
				'repeated-password': repeatPassword,
			})
		})
		.then(response => {
			return response.json();
		})
		.then(data => {
			if(data.result == 1) {
				console.log(data)
				dispatch({
					type: 'SIGNUP_SUCCESS',
				});
			}else {
				dispatch({
					type: 'SIGN_FAILED',
					payload: data.error
				});
			}
		});

	}
}

export function logout(){
	return {
		type: 'LOGOUT'
	}
}