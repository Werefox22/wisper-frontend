import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from '@material-ui/core';
// import { useSelector } from 'react-redux';


import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({setCurrentId}) => {
//    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const [userPosts, setUserPosts] = useState() 

    const fetchData = async () => { 
        var userPostsRes = await fetch("http://wisperapi-env.eba-cp34fknb.us-east-1.elasticbeanstalk.com/user/1?withPosts=true");
        const userPostsJson = await userPostsRes.json();
        setUserPosts(userPostsJson);
        console.log(userPostsJson)
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        !userPosts ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {userPosts.posts.map((post) => (
                    <Grid key={post.post_id} item xs={12} sm={6}>
                        <Post basePost={post} author={userPosts.name} refreshFeed={fetchData}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;