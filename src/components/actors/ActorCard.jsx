import { Link } from 'react-router-dom';

import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>

      <h1>
        {name} {!!gender && `(${gender})`}{' '}
      </h1>

      <p> {country ? `Comes from ${country}` : `No coutry Known`} </p>
      {!!birthday && <p>Born {birthday}</p>}

      <p> {deathday ? `Died ${deathday}` : 'Alive'} </p>

      <div>
        <Link to="/">Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </SearchCard>
  );
};

export default ActorCard;
