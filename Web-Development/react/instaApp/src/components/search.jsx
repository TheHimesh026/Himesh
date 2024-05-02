import '../styles/App.css'
import { useRef,useState } from 'react'

function Search(){
  const searchQuery = useRef();
  const [searchData,setSearchData] = useState([]);
  const accessKey = "RTSNf-qVDoyGXkMFuWyI_JjraFlMvihJlXvm2xmQT-o";
  function searchImage(){
    const URL = `https://api.unsplash.com/search/photos?&client_id=${accessKey}&query=${searchQuery.current.value}&q=low`;
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      setSearchData(data.results)
    })
  }
  return(
    <>
     <div className="search-box-holder">
      <input type="text" placeholder="Search" className="search-box" ref={searchQuery}/>
      <span className="search-icon">
      <img src="/images/bold-glass.png" onClick={searchImage}/>
      </span>
     </div>
     <div className="search-results-displayer">
      {searchData.map((src,index) => (
      <div className="result">
      <img src={src.urls.full} />
      </div>
       ))}
     </div>
    </>
  )
}

export default Search