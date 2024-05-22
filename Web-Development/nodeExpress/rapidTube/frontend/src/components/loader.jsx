function Loader(){
  return(
    <button className="border-2 border-blue-800 rounded bg-fuchsia-800 text-white w-full h-full p-2 text-2xl relative text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">      <span className="hidden absolute top-0 right-0 bottom-0 left-0 bg-white opacity-50 rounded-full animate-pulse"></span>
      <span className="relative">Loading...</span>
     </button>
  )
}

export default Loader;