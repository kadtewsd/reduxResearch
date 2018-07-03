import {Action} from 'redux';

enum ActionNames {
    INC = 'counter/incremet',
    DEC = 'counter/decrement',
}
interface IIncrementAction extends Action {
    plusAmount: number;
    type: ActionNames.INC;
}

export const incrementAmount = (amount: number): IIncrementAction =>  ({
   plusAmount: amount,
   type: ActionNames.INC,
});

interface IDecrementAction extends Action {
    type: ActionNames.DEC;
    minusAmount: number;
}

export const decrementAmount = (amount: number): IDecrementAction => ({
    minusAmount: amount,
    type: ActionNames.DEC,

});

export interface ICounterState {
    num: number;
}

export type CounterActions = IIncrementAction | IDecrementAction;

export const initialState: ICounterState = {num: 0};

/**
 * この関数は、store の createStore 関数で Reducer として紐づきを持たせているので動きます。
 * @param state
 * @param action
 */
export default function firstReducer(state: ICounterState = initialState, action: CounterActions): ICounterState {
    switch (action.type) {
        case ActionNames.INC:
            return {num: state.num + action.plusAmount};
        case ActionNames.DEC:
            return {num: state.num - action.minusAmount};
        default:
            return state;
    }
}
