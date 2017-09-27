import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class ArticleList extends Component {
    static  defaultProps = {
			articles: []
		};
    static propTypes = {
	      articles: PropTypes.array.isRequired
    };

    state = {
        openArticleId: null
    };

    render() {
        const {articles} = this.props;
        if (!articles.length) return <h3>No articles</h3>;
        const articleElements = articles.map((article) =>
            <li key={article.id}>
            	<Article article={article}
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

    toggleArticle = (openArticleId) => () => {
        this.setState({openArticleId});
    }
}

export default ArticleList;