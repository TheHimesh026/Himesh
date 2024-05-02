import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [activePage, setActivePage] = useState('home');

  const handleClick = (page) => {
      setActivePage(page);
  };

  return (
    <div className="footer">
      <span className="home-icon-holder" onClick={() => handleClick('home')}>
        <Link to="/">
        <img src={`/images/${activePage === 'home' ? 'bold-home.png' : 'home.png'}`} alt="Home" />
       </Link>
      </span>
      <span className="search-icon-holder" onClick={() => handleClick('search')}>
      <Link to="/search">
        <img src={`/images/${activePage === 'search' ? 'bold-glass.png' : 'glass.png'}`} alt="Search" />
        </Link>
      </span>
      <span className="add-icon-holder">
     <Link to="/add">
        <img src="/images/add.png" alt="Add" />
        </Link>
      </span>
    </div>
  );
}

export default Footer;
