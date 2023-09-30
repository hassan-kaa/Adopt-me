import Pet from "./Pet";
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found !</h1>
      ) : (
        pets.map((pet) => (
          <Pet
          description={pet.description}
            images={pet.images}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            id={pet.id}
            name={pet.name}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};
export default Results;
