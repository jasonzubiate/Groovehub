import styles from "../../styles/SearchBar.module.scss";
import { useState, useEffect, useContext } from "react";
import FilterButton from "./FilterButton";
import { FiSearch } from "react-icons/Fi";
import { componentContext } from "../../pages/Discover";
import SearchResult from "./SearchResult";
// import SpotifyApi from "../../pages/api/SpotifyApi";

const SearchBar = () => {
	const { spotifyApi, accessToken } = useContext(componentContext);
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		if (!search) return setSearchResults([]);
		if (!accessToken) return;

		let cancel = false;
		spotifyApi.searchArtists(search).then((res) => {
			if (cancel) return;
			setSearchResults(
				res.body.artists.items.map((artist) => {
					console.log(artist);

					return artist;
				})
			);
		});

		return () => (cancel = true);
	}, [search, accessToken]);

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
