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
		case LOAD_COMMENTS + START:
			return state.set('loading', true)
		case LOAD_COMMENTS + SUCCESS:
			return state.set('loading', false)
				.set('loaded', true)
				.setIn(['entities', payload.articleId, comments], new CommentRecord(payload.response))

        case ADD_COMMENT:
            return state.set(randomId, {
                ...payload.comment,
                id: randomId
            })
    }

    return state
}