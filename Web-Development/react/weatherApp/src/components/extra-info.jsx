function ExtraInfo({src,name,value}){
  return(
    <>
       <div className="mt-4">
        <div className="flex">
        <span className="w-8 h-8">
         <img src={src} className="w-full h-full dark:rounded-full"/>
        </span>
        <span>
         <p className="text-xl">{value}</p>
        </span>
        </div>
        <div className="">
         <p className="text-xs ml-2">{name}</p>
        </div>
       </div>
    </>
  )
}

export default ExtraInfo