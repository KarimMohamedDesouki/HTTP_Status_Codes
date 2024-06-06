import "./Status.css";
import { TriangleAlert} from "lucide-react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export const Status500 = () => {
  return (
    <>
      <div className="Red mt-4 p-4 mb-5">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h3>
              <TriangleAlert />
            </h3>
            <h3 className="mx-3"> 5xx Server Error </h3>
          </div>
        </div>
        <p>
          Response status codes beginning with the digit “5” indicate cases in
          which the server is aware that it has erred or is incapable of
          performing the request. Except when responding to a HEAD request, the
          server SHOULD include an entity containing an explanation of the error
          situation, and whether it is a temporary or permanent condition.
          Clients SHOULD display any included entity to the user. These response
          codes are applicable to any request method.
        </p>
      </div>
    </>
  );
};
