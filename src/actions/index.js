// //function list
// restart game
// makeGuess
// generateAuralUpdate
 export const FEEDBACK = "FEEDBACK";
 export function feedback(text) {
	 return {
		 type: FEEDBACK,
		 text
	 };
 }

 export const UPDATE_GUESSES=  "UPDATE_GUESSES";
 export function updateGuesses(guess) {
	 return {
		 type: UPDATE_GUESSES,
		 guess
	 };
 }