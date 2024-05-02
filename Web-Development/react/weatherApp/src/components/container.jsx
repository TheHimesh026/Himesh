function Container(prop){
  return(
    <>
     <div className="container border border-black p-1 rounded md:border-amber-200 lg:border-b-blue-800 sm:border-b-fuchsia-200">
      {prop.children}
     </div>
    </>
  )
}

export default Container