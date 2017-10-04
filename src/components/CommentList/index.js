import React, {Component} from 'react';
import Comment from '../Comment';
import PropTypes from 'prop-types';
import toggleOpen from '../../decorators/toggleOpen';
import './style.css';

class CommentList extends Component {
	componentDidMount() {
		console.log('---', 'mounted')
	}

	componentWillUnmount() {
		console.log('---', 'unmounting')
	}

	componentWillReceiveProps() {
		console.log('---', 'updating')
	}

	render() {
		const {isOpen, toggleOpen} = this.props;
		const text = isOpen ? 'hide comments' : 'show comments';
		return (
			<div>
				<button onClick={toggleOpen}>{text}</button>
				{this.getBody(this.props)}
			</div>
		);
	}

	getBody(props) {
		const {comments, isOpen} = props;
		if (!isOpen) return null;

		const body = comments.length ? (
			<ul>
				{comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
			</ul>
		) : <h3>No comments yet</h3>;

		return (
			<div>
				{body}
				<p><b>Create new comment:</b></p>
				<p><textarea name="comment"/></p>
				<p><button>Send</button></p>
			</div>
		);
	}
}

CommentList.defaultProps = {
    comments: []
};

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default toggleOpen(CommentList);