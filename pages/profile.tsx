import Header from "@/components/common/Header";
import styles from "@/styles/Profile.module.scss";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";
import SmallCardCarousel from "@/components/common/SmallCardCarousel";

function profile() {
  const spotifyApi = useSpotify();
  const { data: session, status: sessionStatus } = useSession();
  const [user, setUser] = useState(null);
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      // Api call to get user data
      spotifyApi.getMe().then((user: any) => setUser(user.body));

      // Api call to get top artists
      spotifyApi.getMyTopArtists().then((data: any) =>
        setTopArtists(
          data.body.items.map((artist: any) => {
            return {
              id: artist.id,
              name: artist.name,
              img: artist.images[0].url,
              genres: artist.genres,
              cardColors: { header: "#f35e5e", body: "#dafcf6" },
            };
          })
        )
      );

      // Api call to get top tracks
      spotifyApi.getMyTopTracks().then((data: any) =>
        setTopTracks(
          data.body.items.map((track: any) => {
            return {
              id: track.id,
              name: track.name,
              img: track.album.images[0].url,
              cardColors: { header: "#C8F377", body: "#D3A8FF" },
            };
          })
        )
      );

      // Api call to get user playlists
      spotifyApi.getUserPlaylists("jasonzubiate13").then((data) =>
        setUserPlaylists(
          data.body.items.map((playlist: any) => {
            return {
              name: playlist.name,
              id: playlist.id,
              img: playlist.images[0].url,
              cardColors: { header: "#4D9DE5", body: "#FFD875" },
            };
          })
        )
      );
    }
  }, [session, spotifyApi]);
  console.log(topArtists);
  console.log(topTracks);
  console.log(userPlaylists);
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
      <div className={styles.content__left}>
        {user && (
          <h1 className={styles.h1}>
            Welcome Back,{" "}
            {user.display_name.charAt(0).toUpperCase() +
              user.display_name.slice(1)}
          </h1>
        )}
      </div>
      <div className={styles.content__right}>
        <SmallCardCarousel header={"Your Top Aritsts"} content={topArtists} />
        <SmallCardCarousel header={"Your Top Tracks"} content={topTracks} />
        <SmallCardCarousel header={"Your Playlists"} content={userPlaylists} />
      </div>
      </div>
    </main>
  );
}

export default profile;
