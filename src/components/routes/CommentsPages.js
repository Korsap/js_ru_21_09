import React from 'react'
import CommentPage from '../CommentPage'

function CommentsPages ({match}) {
		return <CommentPage page = {match.params.page}/>
	}


CommentsPages.propTypes = {
	}

export default CommentsPages