import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForShows } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import { searchForPeople } from './../api/tvmaze';
import ActorsGrid from '../components/actors/ActorsGrid';
import ShowGrid from '../components/shows/ShowGrid';
import { TextCenter } from '../components/common/TextCenter';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOptoion === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOptoion }) => {
    setFilter({ q, searchOptoion });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error occured: {apiDataError.message}</TextCenter>;
    }

    if (apiData?.length === 0) {
      return <TextCenter>No Result</TextCenter>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
