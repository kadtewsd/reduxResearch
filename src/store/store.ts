import { Action, combineReducers, createStore } from '../../node_modules/redux';
// import Article from '../article/Article';
// import { reducerTwo } from '../article/ArticleReducer';
import counter, { CounterActions, ICounterState, } from '../container/module';
// Reducer の function を import すると reducer mapStateToProp の中身が変なものになる。
// import firstReducer, { CounterActions, ICounterState, } from '../container/module';

/**
 * この関数で counter (export default である reduce) を reducer として登録しています。
 * このストアの reducer が生成されます。
 */
export default createStore(
    combineReducers({
        counter,
        // reducerTwo,
    }),
);

export interface IReduxState {
    counter: ICounterState;
}

export type ReduxAction = CounterActions | Action;
