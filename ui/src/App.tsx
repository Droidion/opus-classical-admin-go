import { useEffect, useState } from "react";
import { Hero, Button } from "react-daisyui";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { fetchUserProfile, Profile } from "./fetchUserProfile";

function App() {
  const [user, setUser] = useState<TokenResponse | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => setUser(tokenResponse),
  });
  const logout = () => {
    setProfile(null);
    setUser(null);
  };

  useEffect(() => {
    if (user) {
      fetchUserProfile(user.access_token).then((profile) =>
        setProfile(profile)
      );
    }
  }, [user]);

  return (
    <Hero className="min-h-screen">
      <Hero.Overlay className="bg-opacity-60" />
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Opus Classical</h1>
          <p className="py-6">Admin panel</p>

          {profile ? (
            <div>
              <div>Hello, {profile.name}</div>
              <img className="m-auto my-6 rounded-full" src={profile.picture} />
              <Button color="primary" onClick={() => logout()}>
                Google Sign out
              </Button>
            </div>
          ) : (
            <Button color="primary" onClick={() => login()}>
              Google Sign in
            </Button>
          )}
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default App;
