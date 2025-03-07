import Greetings from "../header/Greetings";

function Carview(){
    return(
        <>
         <Greetings/>
          <h3><a href="/" className="btn btn-light">Go Back</a>View Car</h3>
  <div className="container">
    <div className="form-group mb-3">
      <label htmlfor="number" className="form-label">Car Number:</label>
      <div className="form-control" id="number">???</div>
    </div>
    <div className="form-group mb-3">
      <label htmlfor="model" className="form-label">Car Model:</label>
      <div className="form-control" id="model">???</div>
    </div>
    <div className="form-group mb-3">
      <label htmlfor="type" className="form-label">Car Type(SUV/ CUV/ Sedan):</label>
      <div className="form-control" id="type">???</div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
        </>
    );
}
export default Carview;