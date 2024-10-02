import verifynone from '../assets/verifynone.png'

function Alert() {
  return (
    <div className="container__alert">
      <div className="alert">
        <p>
          <b>Identity Verification

          </b>
          <img className="icon__info" src={verifynone} alt="" />

        </p>
        <p className="text">
          Let's make sure nobody is trying to impersonate you.
        </p>

        <div className="button text__gradient">
          <b>VERIFY ACCOUNT</b>
        </div>
      </div>
    </div>
  );
}

export default Alert;
