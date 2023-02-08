import styles from "../../styles/SearchBar.module.scss";
import { useState, useEffect, useContext } from "react";
import FilterButton from "./FilterButton";
import { FiSearch } from "react-icons/Fi";
import SearchResult from "./SearchResult";
import useSpotify from "@/hooks/useSpotify";
import { useSession } from "next-auth/react";

const SearchBar = () => {
  const spotifyApi = useSpotify();
  const { data: session, status: sessionStatus } = useSession();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    let cancel = false;
    if (spotifyApi.getAccessToken()) {
      spotifyApi.searchArtists(search).then((res: any) => {
        if (cancel) return;
        setSearchResults(
          res.body.artists.items.map((artist: any) => {
            console.log(artist);

            return artist;
          })
        );
      });
    }
    return () => (cancel = true);
  }, [search, spotifyApi]);

  return (
    <div className={styles.search}>
      <div className={styles.search__searchbar}>
        <FiSearch size={24} />
        <input
          className={styles.searchbar__input}
          type="text"
          placeholder="Search Artists"
          onChange={(e) => setSearch(e.target.value)}
        />
        <FilterButton />
      </div>
      {searchResults.length != 0 && (
        <div className={styles.search__results}>
          {" "}
          {searchResults.length > 0 &&
            searchResults.map((result) => <SearchResult result={result} />)}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

// .filter((artist) => {
// 	return artist.genres.some((genre) =>
// 		[
// 			"edm",
// 			"house",
// 			"tech house",
// 			"bass house",
// 			"disco house",
// 			"electro house",
// 			"funky house",
// 			"latin house",
// 			"deep groove house",
// 			"uk house",
// 			"uk tech house",
// 			"uk dance",
// 			"pop dance",
// 			"techno",
// 			"trance"
// 		].includes(genre)
// 	);
// })
