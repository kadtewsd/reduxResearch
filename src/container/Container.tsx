import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IReduxState, ReduxAction } from '../store/store';
import { Counter } from './Counter';
import { decrementAmount, ICounterState, incrementAmount } from './module';

export class ActionDispatcher {
    constructor(private dispatch: (action: ReduxAction) => void) { }

    public increment(amount: number) {
        this.dispatch(incrementAmount(amount));
    }

    public decrement(amount: number) {
        this.dispatch(decrementAmount(amount));
    }
}

/**
 * 下記の 2 つのパラメーターから値が生成されて、Counter オブジェクトにわたる。
 * Counter オブジェクトは、Render メソッドを実装している React の View コンポーネント。
 * Couter オブジェクトに State と Dispatch する内容がわたる。
 * どうやら、Provider store={store} で私たオブジェクトが全て引数に入ってくるようである。
 * @param state ReduxState をもらって、counter を返す。
 * @param dispatch // dispatch をもらって、ストアの書き換えを行う ActionDispatche を生成する。
 */
// 個々の value と actions は Counter のプロパティ名に一致している。
export default connect(
    (state: IReduxState): { value: ICounterState } => ({ value: state.counter }),
    (dispatch: Dispatch<ReduxAction>) => ({ actions: new ActionDispatcher(dispatch) }),
)(Counter);
