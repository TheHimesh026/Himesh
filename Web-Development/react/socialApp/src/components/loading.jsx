import './social.css';

const Loading = () => {
return(
<>
<center>
  <h2>Connection slow!<sup> ...zzz</sup></h2>
  <div className="d-flex justify-content-center align-items-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
</div>
</center>
</>
)
}

export default Loading;