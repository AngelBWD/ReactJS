import React, { Component } from 'react';
import Post from '../Posts/Post/Post';
import postServie from '../../servives/post-service';

export class Detail extends Component {
    state = {
        post: null
    };

    componentDidMount() {
        const id = this.match.params.id;
        postServie.load(id).then(post => {
            this.setState({ post })
        })
    }
    
    render() {
        const { post } = this.state;
        return <Post description={post.description} author={post.author.username} />
    }
}

export default Detail
