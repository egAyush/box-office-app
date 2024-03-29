const Details = props => {
  const { status, premiered, network } = props;
  return (
    <div>
      <p> Status: {status}</p>

      <p>
        Premiered : {premiered} {!!network && `ON ${network.name}`}
      </p>
    </div>
  );
};

export default Details;
