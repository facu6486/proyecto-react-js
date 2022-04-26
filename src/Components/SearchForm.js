import { SearchContainer, Input } from './styledComponents';
import SearchIcon from '@material-ui/icons/Search';

const SearchForm = () => {

    const handleEvent = (evt) => {
        // e.preventDefault()
        // console.log(e.key)
        if (evt.keyCode === 32) evt.preventDefault();
        console.log(evt.keyCode);
    }

    return (
        <SearchContainer>
            <Input onKeyDown={handleEvent} />
            <SearchIcon />
        </SearchContainer>
    );
}

export default SearchForm;