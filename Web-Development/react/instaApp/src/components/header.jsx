import { Link } from 'react-router-dom'

function Header(){
  return(
    <>
     <div className="header-container">
      <div className="app-name-holder">
       <h2 className="app-name">Instagram</h2>
      </div>
      <div className="right-opt-container">
       <span className="heart-icon-container">
         <img src="/images/heart.png" className="heart-img" />
         <span className="heart-spot">•</span>
       </span>
       <span className="msg-icon-container">
       <Link to="/messages">
         <img src="/images/send.png" className="msg-icon" />
         <span className="msg-count">0</span>
        </Link>
       </span>
       <div>
      </div>
     </div>
    </div>
    </>
  )
}

export default Header