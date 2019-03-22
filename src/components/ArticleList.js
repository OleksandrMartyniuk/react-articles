import React, { Component } from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import accordeon from '../decorators/accordeon';

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        toggleOpenArticle: PropTypes.func.isRequired,
        openArticleId: PropTypes.string
    }

    render() {
        const { articles, toggleOpenArticle, openArticleId } = this.props;
        return (
            <ul>
                {articles.map(article =>
                    <Article article={article}
                        isOpen={article.id === openArticleId}
                        toggleOpen={toggleOpenArticle(article.id)} />
                )}
            </ul>
        );
    }
}

export default accordeon(ArticleList);
