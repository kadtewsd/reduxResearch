import * as React from 'react';
import {v1} from 'uuid';
import  './articleForm.css';
import {IFormArticleProp, IFormArticleState} from './formInterface'

interface IFormInputEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLInputElement;
}
interface IChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement;
}

interface ITextAreaChangeEvent extends React.ChangeEvent<HTMLTextAreaElement> {
    target: HTMLTextAreaElement;
}
/**
 * 現在のページの入力された状態を入れておくため、state の肩を指定する。
 */
export class ConnectedForm extends React.Component<IFormArticleProp, IFormArticleState> {

    constructor(prop: IFormArticleProp) {
        super(prop);
        this.state = {
            content: '',
            title: '',
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    public render() {
        const {title, content} = this.state;
        return (
            <form onSubmit={this.handleSubmit} >
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        className='form-control'
                        id='title'
                        value={title}
                        onChange={this.handleTitleChange} />
                        <br />
                    <label htmlFor='content'>Content</label>
                    <textarea
                        className='form-content'
                        id='content'
                        value={content}
                        onChange={this.handleContentChange} />
                </div>
                <button type='submit' className='btn btn-success btn-lg'>
                    SAVE
                </button>
                </form>

        )
    }

    /**
     * フォームで記事のタイトルが変更されたことをステートとして保存しておきます。
     * @param event 
     */
    private handleTitleChange(event: IChangeEvent) {
        this.setState({
            title: event.target.value,
        });
    }

    /**
     * フォームで記事の本文が変更されたことをステートとして保存しておきます。
     * @param event 
     */
    private handleContentChange(event: ITextAreaChangeEvent) {
        this.setState({
            content: event.target.value,
        });
    }

    private handleSubmit(event: IFormInputEvent) {
        event.preventDefault();
        const { title, content } = this.state;
        this.props.articleActionDispatcher.add(v1(), title, content);
        this.setState({ title: '', content: '' });
    }
}
