// //function list
// restart game
// makeGuess
// generateAuralUpdate
 export const FEEDBACK = "FEEDBACK";
 export function feedback(key){
	 return {
		 type: FEEDBACK,
		 key
	 };
 }