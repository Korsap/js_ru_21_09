import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

class Article extends Component {
    static defaultProps = {

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
		const body = isOpen && (
			<div>
				<section>{article.text} </section>
				<CommentList comments={article.comments} />
			</div>
			);

        //console.log('---', isOpen);

        return (
            <div>
                <h2>
                    {article.title}&nbsp;
                    <button onClick={onButtonClick}>
                        {isOpen ? 'Hide' : 'Show'}
                    </button>
                </h2>
                {body}
                <h3>Creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        );
    };
}


export default Article;