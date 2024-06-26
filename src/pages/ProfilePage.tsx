import React from "react";
import { useAuth } from "../context/AuthContext";
import { Profile } from "../components/Profile";
import { LoginForm } from "../components/LoginForm";

function ProfilePage() {
  const { isLoggedIn } = useAuth();
  return (
    <div className="mt-16">{isLoggedIn ? <Profile /> : <LoginForm />}</div>
  );
}

export default ProfilePage;
