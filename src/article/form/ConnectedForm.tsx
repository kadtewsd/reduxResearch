import * as React from 'react';
import {v1} from 'uuid';
import {IFormArticleProp, IFormArticleState} from './formInterface'

interface IFormInputEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLInputElement;
}
interface IChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement;
}
export class ConnectedForm extends React.Component<IFormArticleProp, IFormArticleState> {

    constructor(prop: IFormArticleProp, state: IFormArticleState) {
        super(prop, state);
        this.state = {
            content: '',
            title: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    public render() {
        const {title} = this.state;
        return (
            <form onSubmit={this.handleSubmit} >
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        className='form-control'
                        id='title'
                        value={title}
                        onChange={this.handleChange} />
                </div>
                <button type='submit' className='btn btn-success btn-lg'>
                    SAVE
                </button>
                </form>

        )
    }

    private handleChange(event: IChangeEvent) {
        this.setState({
            title: event.target.value,
        });
    }

    private handleSubmit(event: IFormInputEvent) {
        event.preventDefault();
        const { title, content } = this.state;
        this.props.addArticle(v1(), title, content);
        this.setState({ title: '', content: '' });
    }
}
