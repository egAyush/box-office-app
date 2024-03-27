import ActorCard from './ActorCard';

const ActorsGrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          image={
            data.person.image
              ? data.person.image.medium
              : '/image-not-found.png'
          }
          contry={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
        />
      ))}
    </div>
  );
};

export default ActorsGrid;
