import { Action, combineReducers, createStore } from '../../node_modules/redux';
// 関数名と同じ名前で import すると、state.reducerTwo.articles で値が入ってくる。
// import reducerTwo, { IArticleState } from '../article/ArticleReducer';
// このため、news という名前にして、mapStateToProp の引数の型と同じ名前にする。
import news, { IArticleState } from '../article/ArticleReducer';
// firstReducer は mapStateToProp の引数の型である IReduxState のプロパティに一致していないので、うまく動かない。
// IReduxState のプロパティ名である counter で reducer を import する。
// import firstReducer, { CounterActions, ICounterState, } from '../container/module';
import counter, { CounterActions, ICounterState, } from '../container/module';

/**
 * この関数で counter (export default である reduce) を reducer として登録しています。
 * このストアの reducer が生成されます。
 */
export default createStore(
    combineReducers({
        counter,
        news,
    }),
);

export interface IReduxState {
    counter: ICounterState;
}

/**
 * このインラーフェースのプロパティ名は、reducer の import の名前と一致させる必要がある。
 * mapStateToProp の引数として、IKasakaidReducerState を指定すると、そのプロパティ名は、Reducer の import 名になる。
 * news プロパティの下に紐づいているのが IArticleState.articles になる。
 */
export interface IKasakaidReducerState {
    news: IArticleState;
}

export type ReduxAction = CounterActions | Action;
