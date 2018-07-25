import {UPDATE_GUESSES, 
	updateGuesses,
	RESET_GUESSES,
	resetGuesses, 
	FEEDBACK, 
	feedback, 
	AURAL_STATUS, 
	auralStatus,
	CORRECT_ANSWER} from '../actions/index'
// import AuralStatus from '../components/aural-status';
import { stat } from 'fs';

const initialState = {
	guesses: [],
	feedback: "Make your guess!",
	auralStatus: "",
	correctAnswer: Math.round(Math.random() * 100) + 1

};

export const reducer = (state=initialState, action) => {
    switch (action.type) {
		case UPDATE_GUESSES:
		// console.log("in reducer")
		return Object.assign({}, state, {
			guesses: [ ...state.guesses, action.guess]
		  });
		default:
		  return state
		case RESET_GUESSES:
		return Object.assign({}, state, {
			guesses: []
		})
		case FEEDBACK: 
		// console.log("in reducer.feedback")
		return Object.assign({}, state, {
			feedback: action.text
		});
		case AURAL_STATUS:
		console.log("in reducer.auralstatus");
		return Object.assign({}, state, {
			auralStatus:action.auralStatus
		});
		case CORRECT_ANSWER:
		return Object.assign({}, state, {
			correctAnswer:action.correctAnswer
		}) 
	  }
};