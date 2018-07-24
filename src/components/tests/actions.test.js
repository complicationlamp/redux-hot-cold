import { FEEDBACK} from "../../actions";
import {feedback} from "../../actions";

describe("ACTIONS", () => {
	it("should create an action to return feedback")
	const key = 0;
	const expectedAction = {
		type: FEEDBACK,
		key
	};
	expect(feedback(key)).toEqual(expectedAction);
})