import { useStarredShows } from '../lib/useStarredShows';

const Starred = () => {
  const [starredShows] = useStarredShows();
  //  starredShows
  return <div>Starred Page, Starred {starredShows.length}</div>;
};

export default Starred;
