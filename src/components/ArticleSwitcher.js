import React, {PureComponent} from 'react';

class ArticleSwitcher extends PureComponent {

	state = {
		openArticleId: null
	};

	toggleArticle = (openArticleId) => {
		if (this.memorized.get(openArticleId)) return this.memorized.get(openArticleId);
		const func = (ev) => {
			this.setState({
				openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
			})
		};

		this.memorized.set(openArticleId, func);

		return func;
	};

	memorized = new Map();


}
export default ArticleSwitcher;