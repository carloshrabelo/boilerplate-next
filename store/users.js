const types = {
	REQUEST: 'REQUEST',
	RECEIVE: 'RECEIVE',
	ERROR: 'ERROR',
	RESET: 'RESET'
};

const initialState = {
	isFetching: false,
	data: [],
	message: {}
};

const request = params => ({
	type: types.REQUEST,
	params
});

const receive = data => ({
	type: types.RECEIVE,
	payload: data
});

const error = message => ({
	type: types.ERROR,
	payload: message
});

export const reset = () => ({
	type: types.RESET
});

export const _fetch = () => dispatch => {
	dispatch(request());
	return fetch('/users')
		.then(response => {
			response.json().then(json => dispatch(receive(json)));
		})
		.catch(err => dispatch(error(err)));
};
export { _fetch as fetch };
export default (state = initialState, action) => {
	switch (action.type) {
		case types.REQUEST:
			return {
				...state,
				isFetching: true,
				message: {}
			};
		case types.RECEIVE:
			return {
				...state,
				isFetching: false,
				data: action.payload
			};
		default:
			return state;
	}
};
