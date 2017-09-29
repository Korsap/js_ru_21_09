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



	render(){
		const {comments, articleId, isCommentListOpen, onCommentListClick} = this.props;
		console.log("---", comments);

		if (!comments.length) return <section>No comments yet</section>;

		const commentElements = comments.map((comment) =>
			<li key={comment.id}>
				<Comment comment={comment} />
			</li>);

		const commentList = isCommentListOpen && commentElements;

		return(
			<div>
				<h3>
					Comments:
					<button onClick={onCommentListClick}>
						{isCommentListOpen ? 'hide' : 'show'}
					</button>
				</h3>
				<ul>
					{commentList}
				</ul>
			</div>
		);

	}
}

export default CommentList;