export const baseUrl = 'http://localhost:5000/v1/';
export function newForm(data){
	let formData = new FormData();
	for(let key in data) {
		formData.append(key, data[key])
	}
	return formData;
}