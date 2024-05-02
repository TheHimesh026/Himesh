import { MdDelete } from "react-icons/md";
import {PostListContext} from './store/store-post-list.jsx';
import {useContext} from 'react';
export default function Post ({post}) {

  const {deletePost} = useContext(PostListContext);


  return(
  <>
  <div className="card" style={{ width: '20rem', marginLeft: '18px', marginTop: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">
    {post.body}
  </p>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => {deletePost(post.id)}}>
    <MdDelete />
  </span>
  <div className="d-flex" style={{margin: '10px'}}>
  {post.tags.map((tag) => (
    <span key={tag} className="badge text-bg-primary rounded-pill" style={{marginLeft: '20px'}}>
      <span className="px-2">{tag}</span>
      </span>
    ))}
  </div>
    <div className="alert alert-info" role="alert" style={{marginTop: '15px'}}>
  This post has been reacted by {post.reactions} people.
  </div>
  </div>
  </div>
  </>
  )
  }