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
 * この関数で counter, news という Reduer を引数に渡しています。
 * counter は module、news は ArticleReducer の default として export されている、state と actio を引数とする reducer のメソッドです。
 * createStore メソッドは、default として export されているので、このメソッドを import したモジュールにて reducer にアクセスすることができます。 
 * 一般的な使い方は Provier の属性に store を指定して、子階層のコンポーネントに store を渡します。
 * connect メソッドの第一引数の mapStateToProp 関数のオブジェクトリテラルの引数のメンバー名と reducer の名前 (counter, news) は一致します。
 * connect メソッドの第一引数の mapStateToProp 関数のオブジェクトリテラルの戻り値のメンバー名は、子コンポーネントのプロパティの名前 (value, articles) と一致します。
 * もちろん、store を子コンポーネントで直接呼び出すことも可能です。
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
