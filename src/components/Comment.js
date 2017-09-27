import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Comment extends Component {
	static defaultProps = {
		article: PropTypes.shape({
			user: 'user',
			text: 'text'
		})
	};

	static propTypes = {
		comment: PropTypes.shape({
			user: PropTypes.string.isRequired,
			text: PropTypes.string
		}).isRequired
	};

	render(){
		const {comment} = this.props;
		return(
			<div>
				<h5>{comment.user}</h5>
				<section>{comment.text}</section>
			</div>
		);
	}


}

export default Comment;