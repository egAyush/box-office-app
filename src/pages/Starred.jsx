import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowsByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: async () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),

    // ⬇️ disabled as long as the filter is empty

    refetchOnWindowFocus: false,
  });
  console.log({ starredShows });

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShows?.length === 0) {
    return <div>No Shows were Starred</div>;
  }

  if (starredShowsError) {
    return <div>Error Occured : {starredShowsError.message}</div>;
  }

  return <div>Shows are loading</div>;
};

export default Starred;
