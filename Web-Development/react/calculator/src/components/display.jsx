import Styles from './calculator.module.css';

export default function Display({valueprop}){
  return(
    <>
    <input type="text" className={Styles.display} readOnly value={valueprop}/>
    </>
    )
}