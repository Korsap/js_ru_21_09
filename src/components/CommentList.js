import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends Component {
	static  defaultProps = {
		comments: null,
		isCommentOpen: false,
		onCommentClick: () => null
	};
	static propTypes = {
		comments: PropTypes.array.isRequired,
		isCommentOpen: PropTypes.bool,
		onCommentClick: PropTypes.func
	};

	render(){
		const {comments, isCommentOpen, onCommentClick} = this.props;
		if (!comments.length) return <h3>No Articles</h3>;
		const commentElements = comments.map((comment) =>
			<li key={comment.id}>
				<Comment comment={comment} />
			</li>);
		return(
			<ul>
				{commentElements}
			</ul>
		);

	}
}

export default CommentList;