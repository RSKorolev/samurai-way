import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post
                title="My post 1"
                message="It is my first post"
                likeCount={5}
            />
            <Post
                title="My post 2"
                message="It is my second post"
                likeCount={0}
            />
            <Post
                title="My post 3"
                message="It is my third post"
                likeCount={3}
            />
        </div>
    );
};

export default MyPosts;
