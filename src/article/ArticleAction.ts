import {Action} from 'redux';
import Article from './Article'
import ArticleActionTypes from './ArticleActionTypes'

interface IArticleAction extends Action {
    type: ArticleActionTypes;
    payload: Article;
}

export default IArticleAction;