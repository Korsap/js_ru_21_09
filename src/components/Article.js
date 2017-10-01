import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

class Article extends PureComponent {
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
        clicked: 0
    };

    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments}/>
            </div>
        );
        return (
            <div>
                <h2 ref = {this.setHeaderRef}>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <span onClick = {this.increment}>Clicked: {this.state.clicked} times</span>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        );
    };

    setHeaderRef = header => {
        this.header = header;
        console.log('---', this.header)
    };

    increment = () => this.setState({
        clicked: this.state.clicked + 1
    });
}

export default Article;