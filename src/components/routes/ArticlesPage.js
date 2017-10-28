import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'
import Localized from '../Localized'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 2)
        return (
            <div>
                <h3><Localized>Article List</Localized></h3>
                <ArticleList />
                <Route path = '/articles/:id' children = {this.getArticleView}/>
            </div>
        )
    }

    getArticleView = ({ match }) => {
        if (!match) return <h2><Localized>Select some article</Localized></h2>

        return <Article isOpen id = {match.params.id} key = {match.params.id} />
    }
}

export default ArticlesPage