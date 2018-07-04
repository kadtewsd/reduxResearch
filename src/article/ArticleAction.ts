import {Action} from 'redux';
import Article from './Article'
import ArticleActionTypes from './ArticleActionTypes'

export interface IStateRoot {
    articles: Article[], 
}
/**
 * Reducer に dispatch するインターフェース
 */
interface IArticleAction extends Action {
    type: ArticleActionTypes;
    payload: Article;
}

export default IArticleAction;