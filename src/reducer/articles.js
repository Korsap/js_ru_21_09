import {normalizedArticles} from '../fixtures'
import {ADD_COMMENT, DELETE_ARTICLE} from '../constants'

const articlesMap = normalizedArticles.reduce((acc, article) => {
    return {...acc, [article.id]: article}
}, {})

export default (articleState = articlesMap, action) => {
    const {type, payload} = action;
    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id);
		case ADD_COMMENT: {
			///разобраться с этим куском говнокода
			let commentsId = articleState[payload.articleId].comments;
			commentsId.push(payload.comment.id);
			console.log("!!!!!!!!!", commentsId);
			//commentsId.push(payload.comment.id);
			return {...articleState}
		}
    }
    return articleState;
}