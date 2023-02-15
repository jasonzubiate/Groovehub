import styles from "@/styles/Artist.module.scss";
import Header from "@/components/common/Header";
import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";
import SmallCardCarousel from "@/components/common/SmallCardCarousel";
import { useRecoilState, useRecoilValue } from "recoil";
import { artistIdState, artistState } from "@/atoms/artistAtom";
import BoxLabelSmall from "@/components/common/BoxLabelSmall";
import Image from "next/image";
import BoxLabelLarge from "@/components/common/BoxLabelLarge";

export default function artist() {
  const spotifyApi = useSpotify();
  const { data: session, status: sessionStatus } = useSession();
  const artistId = useRecoilValue(artistIdState);
  const [artist, setArtist] = useRecoilState(artistState);
  const [relatedArtists, setRelatedArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [getArtsitAlbums, setArtsitAlbums] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      // Api call to get artist details
      spotifyApi.getArtist("7kNqXtgeIwFtelmRjWv205").then((data: any) => {
        console.log(data.body);
        setArtist(data.body);
      });
      // Api call to get artist related artists
      spotifyApi.getArtistRelatedArtists("7kNqXtgeIwFtelmRjWv205").then((data: any) => {
        setRelatedArtists(
          data.body.artists.map((artist: any) => {
            return {
              id: artist.id,
              name: artist.name,
              img: artist.images[2].url,
              genres: artist.genres,
              cardColors: { header: "#f35e5e", body: "#dafcf6" },
            };
          })
        );
      });
      // Api call to get artist top tracks
      // spotifyApi.getArtistTopTracks(artistId).then((data: any) => {
      //   setTopTracks(data.body.items);
      // });
      // spotifyApi.getArtistAlbums(artistId).then((data: any) => {
      //   setArtsitAlbums(data.body.items);
      // });
    }
  }, [session, spotifyApi, artistId]);

  console.log(artist);
  console.log(relatedArtists);
  console.log(topTracks);
  console.log(getArtsitAlbums);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.content__left}>
          <div className={styles.artist__image}>
            <Image  className={styles.img__card} alt={artist.name} fill quality={100}/>
          </div>
        </div>
        <div className={styles.content__middle}>
          <h1 className={styles.h1}>{artist.name}</h1>
          <div className={styles.boxes_container}>
            <BoxLabelSmall label={"Followers"} value={artist.followers?.total} />
            <BoxLabelSmall
              label={"Popularity"}
              value={artist.popularity}
            />
            <BoxLabelSmall label={"Liked Songs"} value={7} />
          </div>
          <BoxLabelLarge header={"Genres"} content={artist.genres}/>
        </div>
        <div className={styles.content__right}>
          <SmallCardCarousel
            header={"Artist's You May Like"}
            content={relatedArtists}
          />
        </div>
      </div>
    </div>
  );
}
