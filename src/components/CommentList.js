import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends Component {
	static  defaultProps = {
		comments: [],
		isCommentListOpen: false,
		onCommentListClick: () => null
	};
	static propTypes = {
		comments: PropTypes.array.isRequired,
		isCommentListOpen: PropTypes.bool,
		onCommentListClick: PropTypes.func
	};

	state = {
		openCommentId: null
	};

	render(){
		const {comments, isCommentListOpen, onCommentListClick} = this.props;
		console.log("---", comments);

		if (!comments.length) return <section>No comments yet</section>;

		const commentElements = comments.map((comment) =>
			<li key={comment.id}>
				<Comment comment={comment} />
			</li>);

		const commentList = isCommentListOpen && commentElements;

		return(
			<ul>
				{commentList}
			</ul>
		);

	}
}

export default CommentList;