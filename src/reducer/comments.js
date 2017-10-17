import { ADD_COMMENT } from '../constants';
import {normalizedComments} from '../fixtures';

const commentsMap = normalizedComments.reduce((acc, article) => {
    return {...acc, [article.id]: article}
}, {});

export default (commentsState = commentsMap, action) => {
    const { type, payload, response, error } = action;

    switch (type) {
		case ADD_COMMENT: {
        	return { ...commentsState, [payload.comment.id]: payload.comment };
		}
		default:
			return commentsState;
    }
}