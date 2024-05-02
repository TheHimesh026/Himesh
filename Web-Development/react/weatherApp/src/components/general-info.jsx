function GeneralInfo({condition,location,temp}){
  return(
    <>
     <div className="flex flex-col items-center mt-5">
        <p className="text-3xl">{condition || "Pleasant"}</p>
        <p className="text-2xl">{location || "India"}</p>
        <p className="text-xl">{temp || 0}°c</p>
     </div>
    </>
  )
}

export default GeneralInfo