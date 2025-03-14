import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const UseRedirectUser = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        if (userAuthStatus === "signedIn") {
          history.push("/");
        }
      } catch (error) {
        if (userAuthStatus === "signedOut") {
          history.push("/");
        }
      }
    };
    handleMount();
  }, [history, userAuthStatus]);
};
