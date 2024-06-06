import "../StatusCode/Status.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Status100 } from "../StatusCodes/Status100";
import { Status200 } from "../StatusCodes/Status200";
import { Status300 } from "../StatusCodes/Status300";
import { Status400 } from "../StatusCodes/Status400";
import { Status500 } from "../StatusCodes/Status500";


const Alert = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="mt-5 mb-5 text-center">
              <h1>HTTP Status Code</h1>
            </div>
            <Status100/>
            <Status200/>
            <Status300/>
            <Status400/>
            <Status500/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
