import { useRef } from 'react'

function Navbar({searchFunction}){
  const inputValue = useRef();
  return(
    <>
    <nav className="h-10 w-full flex justify-around mt-5">
    <div className="h-full w-10/12">
     <input type="text" placeholder="Search City" className="border h-full w-full p-2 focus:border-blue-500 placeholder-gray-800 placeholder-opacity-50 rounded outline-none shadow shadow-gray-500 focus:shadow-2xl focus:shadow-cyan-400 dark:focus:shadow-sky-700" ref={inputValue}/>
    </div>
    <span className="w-9 h-10 overflow-hidden rounded-full shadow shadow-fuchsia-700 bg-white p-1 hover:transition-transform-z-6 transition-transform duration-400 transform hover:scale-95 hover:-translate-z-2 active:shadow-4xl dark:shadow-2xl dark:shadow-sky-500" onClick={() => searchFunction(inputValue.current.value)}>
     <img src="/search.png" className="w-full h-full rounded-full hover:transition-transform-z-6 transition-transform duration-400 transform hover:scale-95 hover:-translate-z-2 active:shadow-4xl" />
    </span>
    </nav>
    </>
  )
}

export default Navbar