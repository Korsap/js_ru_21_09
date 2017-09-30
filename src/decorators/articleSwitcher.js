import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class DecoratedComponent extends ReactComponent {
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

	render() {
		return <OriginalComponent {...this.props} currentId = {this.state.openArticleId} articleSwitcher = {this.toggleArticle}/>
	}
}