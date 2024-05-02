import {createContext, useReducer,useState,useEffect} from 'react';

export const PostListContext = createContext({
postList: [],
addPost: () => {},
deletePost: () => {},
});

const postListReducer = (currList,action) => {
let newPostItem = currList;

if (action.type === "DELETE_POST"){
newPostItem = currList.filter((post) => (
post.id !== action.payload.Id));
} else if (action.type === "ADD_POST"){
newPostItem = [action.payload.posts, ...newPostItem];
} else if (action.type === "ADD_INITIAL_POSTS"){
newPostItem = action.payload.posts;
}
return newPostItem;
}

export default function PostListWrapper({children}){

  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  
  const addPost = (posts) => {
  dispatchPostList({
  type: "ADD_POST",
  payload:{
    posts: posts,
  }}
  )};

  const deletePost = (postId) => {
  dispatchPostList({
  type: "DELETE_POST",
  payload: {
  Id: postId,
  }}
  )};

/*  const addInitialPosts = (posts) => {
  dispatchPostList({
  type: "ADD_INITIAL_POSTS",
  payload: {
  posts: posts,
  }}
  )};*/
  
  return (
  <PostListContext.Provider value={{
    postList,
    addPost,
    deletePost,
    }}>
    {children}
    </PostListContext.Provider>
  )
  };