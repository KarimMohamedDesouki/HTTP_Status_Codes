import "./Status.css";
import { TriangleAlert} from "lucide-react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export const Status400 = () => {
  return (
    <>
      <div className="Red mt-4 p-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h3>
              <TriangleAlert />
            </h3>
            <h3 className="mx-3"> 4xx Client Error </h3>
          </div>
        </div>
        <p>
          The 4xx class of status code is intended for cases in which the client
          seems to have erred. Except when responding to a HEAD request, the
          server SHOULD include an entity containing an explanation of the error
          situation, and whether it is a temporary or permanent condition. These
          status codes are applicable to any request method. Clients SHOULD
          display any included entity to the user.
        </p>
      </div>
    </>
  );
};
