import * as React from 'react';
import { ActionDispatcher } from './Container';
import { ICounterState } from './module';

interface IProps {
    value: ICounterState;
    actions: ActionDispatcher;
}

export class Counter extends React.Component<IProps, {}> {
    public render() {
        return (
            <div>
                <p>Score {this.props.value.num} </p>
                <button onClick={this.doIncremant(3)}>Increment 3</button>
                <button onClick={this.doDecrement(2)}>Decrement 2</button>
            </div>
        );
    }
    private doIncremant = (num: number) => () => this.props.actions.increment(num);
    private doDecrement = (num: number) => () => this.props.actions.decrement(num);

}
