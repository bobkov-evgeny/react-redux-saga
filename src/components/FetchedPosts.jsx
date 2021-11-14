import React from "react";
import Post from "./Post";
import {connect} from "react-redux";
import {fetchPosts} from "../redux/actions";
import {Loader} from "./Loader";

const FetchedPosts = ({fetchedPosts, loading, fetchPosts}) => {

    if(loading) return <Loader />

    if (!fetchedPosts.length) {
        return <button className="btn btn-primary" onClick={() => fetchPosts()}>Загрузить</button>
    }

    return fetchedPosts.map(post => <Post post={post} key={post.id}/>)
}

const mapStateToProps = state => {
    return {
        fetchedPosts: state.posts.fetchedPosts,
        loading: state.app.loading
    }
};

export default connect(mapStateToProps, {fetchPosts, })(FetchedPosts)