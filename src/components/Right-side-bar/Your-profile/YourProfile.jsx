import React, { useContext, useLayoutEffect } from "react";
import ProfileContainer from "../Chat-holder/Chat/Profile-container/ProfileContainer";
import { AuthContext } from "../../../context/Auth/Auth";
import { useHistory, Redirect } from "react-router-dom";

function YourProfile() {
  const history = useHistory();
  const { userInfo } = useContext(AuthContext);
  useLayoutEffect(() => {
    if (!userInfo) {
      history.replace("/");
    }
  });
  return (
    <div>
      {userInfo ? (
        <ProfileContainer
          name={userInfo.name}
          occupation={userInfo.occupation}
        />
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}

export default YourProfile;
