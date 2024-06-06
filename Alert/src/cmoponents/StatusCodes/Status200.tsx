import "./Status.css";
import { CheckCheck} from "lucide-react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export const Status200 = () => {
  return (
    <>
      <div className="Green mt-4 p-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h3>
              <CheckCheck />
            </h3>
            <h3 className="mx-3"> 2xx Success </h3>
          </div>
        </div>
        <p>
          This class of status codes indicates the action requested by the
          client was received, understood, accepted, and processed successfully.
        </p>
      </div>
    </>
  );
};
