import "../StatusCode/Status.css";
import { CheckCheck } from "lucide-react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export const Status100 = () => {
  return (
    <>
      <div className="Green p-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h3>
              <CheckCheck />
            </h3>
            <h3 className="mx-3">1xx Informational </h3>
          </div>
        </div>
        <p>
          This class of status code indicates a provisional response, consisting
          only of the Status-Line and optional headers, and is terminated by an
          empty line. There are no required headers for this class of status
          code. Since HTTP/1.0 did not define any 1xx status codes, servers MUST
          NOT send a 1xx response to an HTTP/1.0 client except under
          experimental conditions.
        </p>
      </div>
    </>
  );
};
