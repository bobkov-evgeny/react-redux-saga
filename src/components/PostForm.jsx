import React, {useState} from "react";
import {connect} from "react-redux";
import {createPost, addError, clearErrors} from "../redux/actions";

const PostForm = ({createPost, addError, error}) => {
    const [state, setState] = useState({title: ''});

    const handleSubmit = (e) => {
        e.preventDefault();

        const {title} = state;

        if(!title.trim()) {
            addError('Пустое поле ввода');
            return;
        }

        const newPost = {title, id: Date.now()}
        createPost(newPost);

        setState({title: ''})
    }
    const handleChange = (e) => {
        setState(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Заголовок Поста</label>
                <input className="form-control" value={state.title} name="title" onChange={handleChange} id="title"/>
            </div>
            <button className="btn btn-success mt-2">Добавить</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        error: state.app.error,
    }
};
const mapDispatchToProps = {
    createPost
}

export default connect(mapStateToProps, {createPost, addError, clearErrors})(PostForm);