import React, { useContext } from "react";
import ProfileContainer from "../Chat-holder/Chat/Profile-container/ProfileContainer";
import { AuthContext } from "../../../context/Auth/Auth";

function YourProfile() {
  const { userInfo } = useContext(AuthContext);
  return (
    <div>
      <ProfileContainer name={userInfo.name} occupation={userInfo.occupation} />
    </div>
  );
}

export default YourProfile;
