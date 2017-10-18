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
			const {articleId, comment} = payload;
			let currentArticle = {...articleState[articleId]};
			currentArticle.comments.push(comment.id);
			console.log("!!!!!!!!!", currentArticle);
			return {...articleState, [articleId]: currentArticle}
		}
    }
    return articleState;
}