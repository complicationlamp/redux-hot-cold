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

 export const RESET_GUESSES= "RESET_GUESSES";
 export function resetGuesses() {
	 return {
		 type: RESET_GUESSES
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
 export function auralStatus(auralStatus) {
	 return {
		 type: AURAL_STATUS,
		 auralStatus
	 };
 }

 export const CORRECT_ANSWER ="CORRECT_ANSWER";
 export function correctAnswer(correctAnswer) {
	 return{
		 type: CORRECT_ANSWER,
		 correctAnswer
	 };
 }