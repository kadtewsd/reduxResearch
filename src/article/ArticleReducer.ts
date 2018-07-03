import Article from './Article';
import ArticleAction, { IStateRoot } from './ArticleAction';
import ActionTypes from './ArticleActionTypes';

// ここで any 型を入れると,
// 訳のわからない値が ListComponent に弥。
const initialState: IArticleState = { articles: [new Article(1, '東スポ倒産', 'まさかの東スポ倒産')] };
// const initialState: IArticleState = { articles: [new Article(1, '東スポ倒産', 'まさかの東スポ倒産')] };

/**
 * Reducers produce the state of the application 
 * @param state 
 */

/**
 * 記事のリスト
 */
export interface IArticleState extends IStateRoot {
    articles: Article[],
    // companyName: string,
}
const reducerTwo = (state: IArticleState = initialState, action: ArticleAction) => {
// export function reducerTwo(state: IArticleState = initialState, action: ArticleAction) {
    switch (action.type) {
        case ActionTypes.ADD_ARTICLE:
            // state.articles.push(action.payload)
            // return state;
            // to be immutable
            return { ...state, articles: [...state.articles, action.payload] };
        default:
            return state;
    };
}
export default reducerTwo;