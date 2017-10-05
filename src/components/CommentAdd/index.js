import React, {Component} from 'react';
import './style.css';

class CommentAdd extends Component{
	state = {
		username: '',
		commentText: '',
		style: '',
		disabled: true
	};

	render(){
		const {props} = this.props;

		return(
			<div>
				<p><b>Create new comment:</b></p>
				<p><b>User: <input type = 'text' value = {this.state.username} onChange = {this.handleUserChange} /></b></p>
				<p><b>Comment Text: </b></p>
				<p><textarea className = {this.state.style} onChange = {this.handleCommentChange}>{this.state.commentText}</textarea></p>
				<p><button disabled = {this.state.disabled} onClick = {this.clearForm}>Send</button></p>
			</div>
			);
	}

	handleUserChange = ev => {
		this.disableSending(this.state.username, ev.target.value.length);
		if (ev.target.value.length > 10) return this.setState({
			username: ''
		});

		this.setState({
			username: ev.target.value
		});
	};

	handleCommentChange = ev => {
		console.log("====", this.state.username);
		this.disableSending(ev.target.value.length);
		if (ev.target.value.length < 10 || ev.target.value.length > 50) return this.setState({
			style: 'textarea--red',
			disabled: true
		});

		this.setState({
			style: '',
			disabled: false
		});
	};


	disableSending = (dataLength) => {
		let length = dataLength;
		console.log('====', length);
	};


	clearForm = () => {
		this.setState({
			username: '',
			commentText: ''
		});

		console.log("----------", this.state);
	}

}

export default CommentAdd;