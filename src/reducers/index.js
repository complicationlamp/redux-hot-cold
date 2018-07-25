import {UPDATE_GUESSES, FEEDBACK} from '../actions/index'

const initialState = {
	guesses: []
};

export const reducer = (state=initialState, action) => {
    switch (action.type) {
		case UPDATE_GUESSES:
		console.log("in reducer")
		  return Object.assign({}, state, {
			guesses: [ ...state.guesses, action.guess]
		  })
		default:
		  return state
	  }
};