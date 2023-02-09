import styles from "@/styles/Artist.module.scss";
import Header from "@/components/common/Header";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";
import SmallCardCarousel from "@/components/common/SmallCardCarousel";

function artist() {
  const spotifyApi = useSpotify();
  const { data: session, status: sessionStatus } = useSession();
  const [artist, setArtist] = useState([]);
  const [relatedArtists, setRelatedArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [getArtsitAlbums, setArtsitAlbums] = useState([]);

  useEffect(() => {
    // spotifyApi.getArtist(id).then((data) => {
    //   setArtist(data);
    // });

    // spotifyApi.getArtistRelatedArtists(id).then((data) => {
    //   setRelatedArtists(data);
    // });

    // spotifyApi.getArtistTopTracks(id).then((data) => {
    //   setTopTracks(data);
    // });

    // spotifyApi.getArtistAlbums(id).then((data) => {
    //   setArtsitAlbums(data);
    // });
  }, [session, spotifyApi]);

  console.log(artist);
  console.log(relatedArtists);
  console.log(topTracks);
  console.log(getArtsitAlbums);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.content__left}>
          left
        </div>
        <div className={styles.content__middle}>
          middle
        </div>
        <div className={styles.content__right}>
          right
        </div>
      </div>
    </div>
  )
}

export default artist

