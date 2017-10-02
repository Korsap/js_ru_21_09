import React, {PureComponent} from 'react';

class ArticleSwitcher extends PureComponent {

	state = {
		openItemId: null
	};

	memorized = new Map();

	toggleArticle = (openArticleId) => {
		if (this.memorized.get(openArticleId)) return this.memorized.get(openArticleId);
		const func = (ev) => {
			this.setState({
				openItemId: this.state.openItemId === openArticleId ? null : openArticleId
			})
		};

		this.memorized.set(openArticleId, func);

		return func;
	};
}


export default ArticleSwitcher;