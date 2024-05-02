import './styles/App.css'
import Header from './components/header.jsx'
import StorySection from './components/story-section.jsx'
import Post from './components/post.jsx'
import Footer from './components/footer.jsx'
import Messages from './components/messages.jsx'
import { useEffect,createContext,useState } from 'react'

const accessKey = "RTSNf-qVDoyGXkMFuWyI_JjraFlMvihJlXvm2xmQT-o";
const URL = `https://api.unsplash.com/photos/?client_id=${accessKey}&q=low`;
export const ImageData = createContext();

function App() {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      setData(data)
      console.log(data)})
  },[])
  
  return (
    <>
     <ImageData.Provider value={data}>
       <Header />
       <StorySection />
       <Post />
       <Footer />
    </ImageData.Provider>
    </>
  )
}

export default App
