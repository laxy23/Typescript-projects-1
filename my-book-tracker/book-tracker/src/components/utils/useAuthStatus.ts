import { useEffect, useState } from "react";

function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const user = localStorage.getItem("librifyUser");
  if (user) {
    const userExist = JSON.parse(user);
    useEffect(() => {
      if (userExist !== null && userExist.name !== "") {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
  }

  return { loggedIn, checkingStatus };
}

export default useAuthStatus;
