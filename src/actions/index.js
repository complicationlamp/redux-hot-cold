// //function list
// restart game
// makeGuess
// generateAuralUpdate

 export const UPDATE_GUESSES=  "UPDATE_GUESSES";
 export function updateGuesses(guess) {
	 return {
		 type: UPDATE_GUESSES,
		 guess
	 };
 }

 export const FEEDBACK = "FEEDBACK";
 export function feedback(text) {
	 return {
		 type: FEEDBACK,
		 text
	 };
 }
 export const AURAL_STATUS = "AURAL_STATUS";
 export function auralStatus(/* */)

 export const CORRECT_ANSWER ="CORRECT_ANSWER";
 EXPORT function correctAnswer(/*  */)