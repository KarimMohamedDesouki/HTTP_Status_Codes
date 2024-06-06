import "./Status.css";
import { TriangleAlert} from "lucide-react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export const Status300 = () => {
  return (
    <>
      <div className="Red mt-4 p-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h3>
              <TriangleAlert />
            </h3>
            <h3 className="mx-3"> 3xx Redirection </h3>
          </div>
        </div>
        <p>
          This class of status code indicates that further action needs to be
          taken by the client in order to fulfill the request. The action
          required MAY be carried out by the user agent without interaction with
          the user if and only if the method used in the second request is GET
          or HEAD. A client SHOULD detect infinite redirection loops, since such
          loops generate network traffic for each redirection.
        </p>
      </div>
    </>
  );
};
