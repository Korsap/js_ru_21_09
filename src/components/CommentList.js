import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends Component {
	static  defaultProps = {
		comments: []
	};
	static propTypes = {
		comments: PropTypes.array.isRequired,
	};

	state = {
		isOpen: false
	};

	render(){
		console.log('---', this.state.isOpen);
		return(
			<div>
				<button onClick={this.toggleClick}>
					{this.state.isOpen ? 'Hide comments' : 'Show comments'}
				</button>
				{this.getBody()}
			</div>
		);

	}

	getBody(){
		if(!this.state.isOpen) return null;
		const {comments} = this.props;
		const body = comments.length ? (
				<ul>
					{comments.map((comment) =>
					<li key={comment.id}>
						<Comment comment={comment}/>
					</li>)}
				</ul>

		) : <b>No comments yet</b>;

		return (
			<div>
				{body}
			</div>
		)
	}

	toggleClick = () => this.setState({
		isOpen: !this.state.isOpen
	})
}

export default CommentList;