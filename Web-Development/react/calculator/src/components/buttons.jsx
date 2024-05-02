import Styles from './calculator.module.css';

export default function Buttons({buttonClicked}) {
  const btnNo =
  ['.','=','C','/','1','2','3','+','4','5','6','-','7','8','9','×','0',];
  return(
    <>
    <div className={Styles['btn-holder']}>
    {btnNo.map((btn) => (
      <button className={Styles.buttons} onClick={() =>
      {buttonClicked(btn)}}>{btn}</button>
    ))}
    </div>
    </>
    )
}