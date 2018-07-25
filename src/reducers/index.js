import {UPDATE_GUESSES, FEEDBACK, feedback} from '../actions/index'

const initialState = {
	guesses: [],
	feedback: "Make your guess!"
};

export const reducer = (state=initialState, action) => {
    switch (action.type) {
		case UPDATE_GUESSES:
		// console.log("in reducer")
		  return Object.assign({}, state, {
			guesses: [ ...state.guesses, action.guess]
		  })
		default:
		  return state
		case FEEDBACK: 
		console.log("in reducer.feedback")
		return Object.assign({}, state, {
			feedback: action.text
		}) 
	  }
};