export default function Container(props) {
  return(
    <div className="container border border-black rounded-xl p-2">
    {props.children}
    </div>
  )
}