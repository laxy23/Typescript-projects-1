import { useEffect, useState } from "react";

function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const storedUser = localStorage.getItem("librifyUser");
  const user = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    if (user !== null && user.name !== "") {
      setLoggedIn(true);
    }
    setCheckingStatus(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { loggedIn, checkingStatus };
}

export default useAuthStatus;
