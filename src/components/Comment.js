import React from 'react';
import PropTypes from 'prop-types';


function Comment({comment}){
	return(
		<div>
			<p>{comment.text}
				<b>&nbsp;by&nbsp;{comment.user}</b>
			</p>
		</div>
	);
}

Comment.propTypes = {
	comment: PropTypes.shape({
		user: PropTypes.string.isRequired,
		text: PropTypes.string
	}).isRequired
};

export default Comment;