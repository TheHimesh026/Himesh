  import Post from './post.jsx';
  import Welcome from './welcome.jsx';
  import {useLoaderData} from 'react-router-dom';
  
  const PostList = () => {
    
   const postList = useLoaderData() || [];
    return(
    <>
    
    {postList.length === 0 && <Welcome />}
    {postList.map((post) => (
    <Post key={post.id} post={post} />))}
    </>
    )
    };
    
  export default PostList;
  
  export const postLoader = () => {
      return fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data)=> {
        return (data.posts);
      })
      };