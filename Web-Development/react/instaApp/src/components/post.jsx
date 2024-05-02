import { useReducer,useContext,useState,useEffect } from 'react'
import { ImageData } from '../App.jsx'

function postStateReducer(state,act){
  if(act.type == "LIKE"){
    return {...state,like:!state.like,likes: state.like ? state.likes - 1 : state.likes + 1};
  }else if(act.type == "SAVE"){
    return {...state,save:!state.save};
  }
};

function Post(){
  const [postState,dispatchState] = useReducer(postStateReducer,{save:false,like:false});
  const { like,save,likes } = postState;
  const imageContexedData = useContext(ImageData);
  const [imageState,setImageState] = useState([]);
  
  useEffect(() => {
    setImageState(imageContexedData.map(info => ({ save: false, like: false, likes: 0 })));
  },[imageContexedData]);

  
  const onClickState = (clickedState) => {
   switch(clickedState){
     case "LIKE":
      dispatchState({
       type:"LIKE",
     });
     break;
     case "SAVE":
      dispatchState({
        type:"SAVE",
      })
     break;
   }};
  
  return(
    <>
    <div className="post-lists">
    {imageContexedData.map((info,index) => (
     <div className="post-list" key={index}>
      <div className="post-detail">
      <span className="post-detail-img-container">
        <img src={info.user.profile_image.small} className="post-detail-img" />
      </span>
       <div className="post-list-info">
      <span className="verified-icon-holder">
       <p className="user-name">
       {info.user.username}
       </p>
       <img src="/images/verified.png" className="verified-icon"/>
       </span>
       <p className="real-name">
        {info.user.name}
       </p>
       </div>
      </div>
      <div className="post">
       <img src={info.urls.full} className="post-img" />
      </div>
      <div className="post-bottom-options">
       <div className="first-bottom-option">
       <span className="like-icon-holder" onClick={() => onClickState("LIKE")}>
        <img src={`/images/${like ? "dark-heart.png" : "heart.png"}`} className="like-icon" />
        <p className="like-counter">{likes}</p>
      </span>
      <span className="comment-icon-holder">
        <img src="/images/chat.png" className="comment-icon" />
      </span>
      <span className="send-icon-holder">
        <img src="/images/send.png" className="send-icon" />
      </span>
     <div className="save-icon-container">
    <a href={info.links.download}>
      <span className="save-icon-holder" onClick={() => onClickState("SAVE")}>
        <img src={`/images/${save ? "dark-save.png" : "save.png"}`} className="save-icon"/>
      </span>
     </a>
     </div>
    </div>
    </div>
    <div className="post-description">
      <p className="post-description-user-name">
       {info.user.username}</p>
     <p className="post-description-detail">{info.alt_description}</p>
    </div>
   </div>
  ))}
  </div>
    </>
  )
}

export default Post