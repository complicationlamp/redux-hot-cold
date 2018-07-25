import { FEEDBACK} from "../../actions";
import {feedback} from "../../actions";

describe("ACTIONS", () => {
	it("should create an action to return feedback")
	const text = "testing";
	const expectedAction = {
		type: FEEDBACK,
		text
	};
	expect(feedback(text)).toEqual(expectedAction);
})