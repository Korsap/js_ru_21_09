import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, Switch, Redirect} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import CommentsPage from './routes/CommentsPage'
import Filters from './Filters'
import Counter from './Counter'
import Menu, {MenuItem} from './Menu'
import dictionary from '../dictionary'
import Localized from './Localized'

class App extends Component {
    state = {
        username: '',
		language: 'en'
    }

	static propTypes = {
		language: PropTypes.string
	}

    static childContextTypes = {
        user: PropTypes.string,
		language: PropTypes.string,
		dictionary: PropTypes.object
    }

    getChildContext() {
        return {
            user: this.state.username,
			language: this.state.language,
			dictionary: dictionary[this.state.language]
        }
    }

    changeLanguage = language => ev => this.setState({language})

    render() {
        const {username} = this.state
        console.log('---', 1)

        return (
            <div>
                <h1>App name</h1>
				<ul>
					<li onClick={this.changeLanguage('en')}>English</li>
					<li onClick={this.changeLanguage('ru')}>Russian</li>
				</ul>
                <Menu>
                    <MenuItem to = '/articles'><Localized>articles</Localized></MenuItem>
                    <MenuItem to = '/filters'><Localized>filters</Localized></MenuItem>
                    <MenuItem to = '/counter'><Localized>counter</Localized></MenuItem>
                    <MenuItem to = '/comments/1'><Localized>comments</Localized></MenuItem>
                </Menu>
                User: <input type = 'text' value = {username} onChange = {this.handleUserChange}/>
                <Switch>
                    <Redirect from = '/' exact to = '/articles'/>
                    <Route path = '/counter' component = {Counter} exact />
                    <Route path = '/filters' component = {Filters} />
                    <Route path = '/articles/new' render = {this.newArticlePage} />
                    <Route path = '/articles' component = {ArticlesPage} />
                    <Route path = '/comments' component = {CommentsPage}/>
                    <Route path = '*' render = {this.notFound} />
                </Switch>
            </div>
        )
    }

    notFound = () => <h1>Not Found</h1>

    newArticlePage = () => <h1>New Article Page</h1>

    handleUserChange = ev => {
        if (ev.target.value.length > 10) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
    }
}

export default App