import React , {Component} from 'react';
import PropTypes from 'prop-types'

import './Posts.css';
import Post from './Post/Post';
import  postServie  from '../../servives/post-service';


// function Posts() {
//     return (
//         <div className='Posts'>
//             <Post imageUrl='logo192.png' imageAlt='alt' author='Me'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima obcaecati repudiandae, fugiat quasi nulla asperiores placeat vel accusantium cumque architecto perferendis, iusto deserunt laboriosam a nesciunt in doloribus pariatur natus!</Post>
//         </div>
//     )
// }

export class Posts extends Component {

    state = {
        posts: null
    };

    componentDidMount() {
        postServie.load(null, this.props.limit).then(posts => {
          this.setState({ posts });
        });
      }
    
    render() {
        const { posts } = this.state
        return posts ? <div className='Posts'>
             {posts.map((post) => <Post key={post._id} imageUrl='logo192.png' imageAlt='alt' author={post.author.username}>{post.description}</Post>)}
            </div> : <div>Loading...</div>;
        
    }
}

Posts.propTypes = {
    limit: PropTypes.number
}


export default Posts;
