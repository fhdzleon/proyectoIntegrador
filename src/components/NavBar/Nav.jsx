import SearchBar from "../SearchBar/SearchBar"


export default function Nav(props) {
    return (
        <SearchBar onSearch={props.onSearch}></SearchBar>
     )
}


 