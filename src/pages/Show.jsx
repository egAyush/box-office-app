import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';

const useShowById = showId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (error) {
        setShowError(error);
      }

      // ...
    }
    fetchData();
  }, [showId, setShowData, setShowError]);

  return { showData, showError };
};

const Show = () => {
  const { showId } = useParams();
  const { showData, showError } = useShowById(showId);

  if (showError) {
    return <div>We have an Error : {showError.message}</div>;
  }
  if (showData) {
    return <div>Got Show Data : {showData.name}</div>;
  }

  return <div> Data is loading</div>;
};

export default Show;
