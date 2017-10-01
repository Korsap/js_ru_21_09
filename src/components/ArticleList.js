import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import articleSwitcher from "../decorators/articleSwitcher";

function ArticleList(props) {
    const {articles, currentId, articleSwitcher} = props;
    if (!articles.length) return <h3>No Articles</h3>;
    const articleElements = articles.map((article) => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id === currentId}
                 onButtonClick={articleSwitcher(article.id)}
        />
    </li>);
    return (
        <ul>
            {articleElements}
        </ul>
    );
}

ArticleList.defaultProps = {
    articles: []
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default articleSwitcher(ArticleList);