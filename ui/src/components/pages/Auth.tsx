import { useEffect, useState } from "react";
import { Hero, Button } from "react-daisyui";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { useRecoilState } from "recoil";
import { fetchUserProfile } from "../../fetchUserProfile";
import { profileState } from "../../stores/profileState";
import { Navigate, redirect } from "react-router-dom";

function Auth() {
  const [user, setUser] = useState<TokenResponse | null>(null);
  const [profile, setProfile] = useRecoilState(profileState);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => setUser(tokenResponse),
  });

  useEffect(() => {
    if (user) {
      fetchUserProfile(user.access_token).then((profile) =>
        setProfile(profile)
      );
    }
  }, [user]);

  return profile ? (
    <Navigate to="/content/countries" replace={true} />
  ) : (
    <Hero className="min-h-screen">
      <Hero.Overlay className="bg-opacity-60" />
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Opus Classical</h1>
          <p className="py-6">Admin panel</p>
          <Button color="primary" onClick={() => login()}>
            Google Sign in
          </Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default Auth;
