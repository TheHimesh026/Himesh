import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div className="header container" style={{ textAlign: 'center', backgroundColor: '#f8f9fa', padding: '20px 0' }}>
        <header>
          <ul style={{ listStyle: 'none', display: 'inline-block', margin: 0, padding: 0 }}>
            <li style={{ marginRight: '30px', display: 'inline-block' }}>
              <Link to={"/"} style={{ textDecoration: 'none', color: '#212529', fontWeight: 'bold', fontSize: '18px' }}>Home</Link>
            </li>
            <li style={{ display: 'inline-block' }}>
              <Link to={"/create-post"} style={{ textDecoration: 'none', color: '#212529', fontWeight: 'bold', fontSize: '18px' }}>Create Post</Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}