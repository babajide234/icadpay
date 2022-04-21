import { SearchbarContainer, SearchbarIcon, Searchbarinput } from "./billsElements";

export default function SearchBar () {
    return (
        <SearchbarContainer>
            <SearchbarIcon
                src="/img/search.svg"
                alt=''
            />
            <Searchbarinput
                type='text'
                placeholder="Enter bill type e.g DSTV "
            />
        </SearchbarContainer>
    );
}