import './todo.css';

export default function Container(prop){
  return(
    <>
    <div className = "container">
    {prop.children}
    </div>
    </>
    )
}