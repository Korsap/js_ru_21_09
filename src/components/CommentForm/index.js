import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from "../../AC/index";
import './style.css';

class CommentForm extends Component {
    static propTypes = {
    };

    state = {
        user: '',
        text: ''
    };

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <strong>user:</strong>
				<br/>
				<input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                <br/>
                <strong>comment:</strong>
				<br/>
				<textarea value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
				<br/>
                <input type = "submit" value = "submit" disabled = {!this.isValidForm()}/>
            </form>
        );
    }

    handleSubmit = ev => {
        ev.preventDefault();
		this.props.addComment(this.state, this.props.articleId);
        this.setState({
			user: '',
			text: ''
		});

    };

    isValidForm = () => ['user', 'text'].every(this.isValidField);

    isValidField = type => this.state[type].length >= limits[type].min;

    getClassName = type => this.isValidField(type) ? '' : 'form-input__error';

    handleChange = type => ev => {
        const {value} = ev.target;
        if (value.length > limits[type].max) return;
        this.setState({
            [type]: value
        });
    };
}

const limits = {
    user: {
        min: 10,
        max: 50
    },
    text: {
        min: 10,
        max: 50
    }
};

/*function mapStateToProps(state) {
	return {
		newState: state.articles[id]
	}
}*/

export default connect(null, { addComment })(CommentForm);