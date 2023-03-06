export interface Profile {
  id: string;
  email: string;
  verified_email: true;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}

function assertIsProfile(profile: unknown): profile is Profile {
  return (
    (profile as Profile).id !== undefined &&
    (profile as Profile).email !== undefined &&
    (profile as Profile).verified_email !== undefined &&
    (profile as Profile).name !== undefined &&
    (profile as Profile).given_name !== undefined &&
    (profile as Profile).family_name !== undefined &&
    (profile as Profile).picture !== undefined &&
    (profile as Profile).locale !== undefined
  );
}

export async function fetchUserProfile(accessToken: string): Promise<Profile> {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
  );
  if (!result.ok) {
    throw new Error("Problem fetching data");
  }

  const profile = await result.json();
  if (assertIsProfile(profile)) {
    return profile;
  } else {
    throw new Error("Incorrect returned data");
  }
}
