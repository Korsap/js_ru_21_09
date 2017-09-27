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

    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section>{article.text}</section>;
        console.log('---', isOpen);
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                <h4>
                    Comments:
                    <button>

                    </button>
                    <CommentList comments={article.comments}/>
                </h4>
            </div>
        );
    };
}


export default Article;