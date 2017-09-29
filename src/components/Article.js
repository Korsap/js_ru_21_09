import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

class Article extends Component {
    static defaultProps = {
			article: PropTypes.shape({
				title: 'Title',
				text: 'Text',
				date: '1970-01-01T00:00:00.000Z'
			}).isRequired,
			isOpen: false,
			onButtonClick: () => null
    };

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired
        }).isRequired,
        isOpen: PropTypes.bool,
        onButtonClick: PropTypes.func
    };

	state = {
		openArticleId: null
	};

    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section>{article.text}</section>;
        //console.log('---', isOpen);
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'hide' : 'show'}
                    </button>
                </h2>
                {body}
                <h4>Creation date: {(new Date(article.date)).toDateString()}</h4>

                    <CommentList comments={article.comments}
								 articleId={article.id}
								 isCommentListOpen={article.id === this.state.openArticleId}
								 onCommentListClick={this.toggleComments(article.id)}
					/>
            </div>
        );
    };

	toggleComments = (openArticleId) => () => {
		this.setState({openArticleId});
		const id = this.state.openArticleId === openArticleId ? null : openArticleId;
		this.setState({openArticleId: id});
	}

}


export default Article;