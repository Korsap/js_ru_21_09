import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import Loader from './Loader'
import {connect} from 'react-redux'
import {loadCommentsPage} from '../AC'
import {NavLink} from 'react-router-dom'

class CommentsPaging extends Component {

	componentWillMount() {
		this.props.loadCommentsPage(this.props.page)
	}

	componentWillReceiveProps({page, loadComponentsPage}) {
		loadComponentsPage(page)
	}

	render() {
		const {total} =this.props
		if (!total) return <Loader />
		return (
			<div>
				{this.getCommentsBody()}
				{this.getPaginator()}
			</div>
		)
	}

	getCommentsBody() {
		const {comments, loading} = this.props
		if(loading || !comments) return <Loader/>
		const commentsBody = <ul>
			{comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
		</ul>

		return {commentsBody}
	}

	getPaginator() {
		const {total} = this.props
		const items = []
		for(let i = 1; i <= Math.floor((total - 1) / 5) + 1; i++) {
			items.push(<li key={i}><Navlink to={`/comments/${i}`} activeStyle={{color: 'red'}}>{i}</Navlink></li>)
		}
		return <ul>{items}</ul>
	}
}

function mapStateToProps(state, {page}) {
	const {total, pagination} = state.comments
	return {
		total,
		loading: pagination.getIn([page, 'loading']),
		comments: pagination.getIn([page, 'ids'])
	}
}

export default connect(mapStateToProps, {loadCommentsPage})(CommentsPaging)