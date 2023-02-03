import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/common/Header";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";
import artistpic from "@/public/img/artistpic.jpg";
import SmallCardCarousel from "@/components/common/SmallCardCarousel";

export default function Home() {
  const spotifyApi = useSpotify();
  const { data: session, status: sessionStatus } = useSession();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getMyRecentlyPlayedTracks().then((data: any) => {
        console.log(data);
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  const artists = [
    {
      name: "Artist",
      img: artistpic,
      genres: ["EDM", "Tech House", "Electro House", "Trance"],
      rating: 98
    },
    {
      name: "Artist",
      img: artistpic,
      genres: ["EDM", "Tech House", "Electro House", "Trance"],
      rating: 98
    },
    {
      name: "Artist",
      img: artistpic,
      genres: ["EDM", "Tech House", "Electro House", "Trance"],
      rating: 98
    },
    {
      name: "Artist",
      img: artistpic,
      genres: ["EDM", "Tech House", "Electro House", "Trance"],
      rating: 98
    },
    {
      name: "Artist",
      img: artistpic,
      genres: ["EDM", "Tech House", "Electro House", "Trance"],
      rating: 98
    },
    {
      name: "Artist",
      img: artistpic,
      genres: ["EDM", "Tech House", "Electro House", "Trance"],
      rating: 98
    },
  ];

  return (
    <>
      <Head>
        <title>Groovehub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Header />
          <SmallCardCarousel header={"Hot This Week"} content={artists}/>
          <SmallCardCarousel header={"Recently Played"} content={artists} />
          <SmallCardCarousel header={"Playlists For You"} content={artists} />
        </div>
      </main>
    </>
  );
}
