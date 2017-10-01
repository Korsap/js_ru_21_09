import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import ArticleSwitcher from "./ArticleSwitcher";

class ArticleListInherited extends ArticleSwitcher{

	static deaultProps = {
	articles: []
	};

	static propTypes = {
		articles: PropTypes.array.isRequired
	};

	/*constructor(){
		super();

		this.state = {
			openArticleId: super().state.openArticleId
		}
	}

	abc(currentId){
		super.toggleArticle(currentId);
	}

	render(){
		const {articles} = this.props;
		if (!articles.length) return <h3>No Articles</h3>;
		const articleElements = articles.map((article) =>
			<li key={article.id}><Article article={article}
										  isOpen={article.id === this.state.openArticleId}
										  onButtonClick={this.abc(article.id)}
								/>
			</li>);

		return (
			<ul>
				{articleElements}
			</ul>
		);
	}*/
/* не могу понять почему так не работает */

	render(){
		const {articles} = this.props;
		if (!articles.length) return <h3>No Articles</h3>;
		const articleElements = articles.map((article) =>
			<li key={article.id}><Article article={article}
										  isOpen={article.id === this.state.openArticleId}
										  onButtonClick={this.toggleArticle(article.id)}
			/>
			</li>);

		return (
			<ul>
				{articleElements}
			</ul>
		);
	}

}


export default ArticleListInherited;