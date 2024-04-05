import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowsByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';
import { TextCenter } from '../components/common/TextCenter';

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
    return <TextCenter>No Shows were Starred</TextCenter>;
  }

  if (starredShowsError) {
    return <TextCenter>Error Occured : {starredShowsError.message}</TextCenter>;
  }

  return <TextCenter>Shows are loading</TextCenter>;
};

export default Starred;
