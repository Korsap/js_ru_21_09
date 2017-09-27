import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends Component {
	static  defaultProps = {
		comments: null,
		isCommentOpen: false,
		onButtonClick: () => null
	};
	static propTypes = {
		comments: PropTypes.array.isRequired,
		isCommentOpen: PropTypes.bool,
		onButtonClick: PropTypes.func
	};

	render(){

	}


}

export default CommentList;