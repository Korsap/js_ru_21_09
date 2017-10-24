import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
//import {normalizedComments} from '../fixtures'
import {arrToMap, ReducerRecord} from './utils'
import {Record, OrderedMap} from 'immutable'

const CommentRecord = Record({
	id: null,
	user: null,
	text: null
});

export default (state = new ReducerRecord(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({
				...payload.comment,
				id: randomId
			}))

		case LOAD_COMMENTS + SUCCESS:
			console.log("---", 2, payload.response)
			console.log("---", 3, state.mergeIn(['entities'], arrToMap(payload.response, CommentRecord)).toJS())
		return state.mergeIn(['entities'], arrToMap(payload.response, CommentRecord))

	}

    return state
}