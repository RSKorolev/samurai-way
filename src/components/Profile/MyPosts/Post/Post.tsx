import classes from './Post.module.css';
type PropsType = {
    title: string;
    message: string;
    likeCount: number;
};
const Post = ({ title, message, likeCount }: PropsType) => {
    return (
        <div className={classes.item}>
            <img
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/101044562/original/d945ac703ecbc1bd74a0b408455202151691ca4a/create-you-an-avatar.png"
                alt="avatar"
            />
            <div className={classes.itemTitle}>{title}</div>
            {message}
            <div>like {likeCount}</div>
        </div>
    );
};
export default Post;
