import React from "react";
import Image from "next/image";
import styles from "/styles/SearchResult.module.scss";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { artistIdState } from "@/atoms/artistAtom";

const SearchResult = ({ setSearch, result }) => {
  const [artistId, setArtistId] = useRecoilState(artistIdState);
  const smallestProfileImage = result.images.reduce((smallest, image) => {
    if (image.height < smallest.height) return image;
    return smallest;
  }, result.images[0]);

  return (
    <Link
      key={result.id}
      href={`/artist`}
      onClick={() => {
        setArtistId(result.id);
        setSearch("")
      }}
      className={styles.result}
    >
      {result.images.length != 0 && (
        <img
          src={smallestProfileImage.url}
          alt={result.name}
          className={styles.img}
        />
      )}
      <div className={styles.result__info}>
        <label className={styles.result__title}>{result.name}</label>
        <label className={styles.result__genres}>
          {result.genres.slice(0, 3).join(", ")}
        </label>
      </div>
    </Link>
  );
};

export default SearchResult;
