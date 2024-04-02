import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';

const SearchForm = ({ onSearch }) => {
  const [searchOptoion, setSearchOption] = useState('shows');
  const [searchStr, setSearchStr] = useSearchStr();

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOptoion,
    };

    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />

      <label htmlFor="">
        Shows
        <input
          type="radio"
          name="search-optiion"
          value="shows"
          checked={searchOptoion === 'shows'}
          onChange={onRadioChange}
        />
      </label>

      <label htmlFor="">
        Actors
        <input
          type="radio"
          name="search-optiion"
          value="actors"
          checked={searchOptoion === 'actors'}
          onChange={onRadioChange}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
