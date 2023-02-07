import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import SpotifyWebAPi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebAPi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

function useSpotify() {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      // If refresh access token attempt fails, direct user to login...
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
}

export default useSpotify;
