import React from 'react';
import ArticleList from './ArticleList';
import articles from '../fixtures';
import ArticleListInherited from "./ArticleListInherited";

function App() {
    return (
        <div>
            <h1>App name(decorator)</h1>
			<ArticleList articles={articles} />
			<h1>App name(class inherited)</h1>
            <ArticleListInherited articles={articles} />
        </div>
    );
}

export default App;