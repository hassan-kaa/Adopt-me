import { useContext, useState } from "react";
import useBreedList from "../services/useBreedList";
import Results from "../components/Results";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../services/fetchSearch";
import AdoptedPetContext from "../services/AdoptedPetContext";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [adoptedPet, _] = useContext(AdoptedPetContext);
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="p-4 lg:p-8 ">
      <form
      className="my-6 md:gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt="adopted-pet" />
          </div>
        ) : (
          ""
        )}
        <label className="label" htmlFor="location">
          Location
          <input className="mb-5 block w-full rounded-lg " type="text" id="location" name="location" placeholder="Location"  />
        </label>

        <label className="label" htmlFor="animal">
          Animal
          <select
          className="mb-5 block w-full rounded-lg"
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label className="label" htmlFor="breed">
          Breed
          <select className="w-full mb-5 block rounded-lg disabled:opacity-50" disabled={!breeds.length} id="breed" name="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button className=" w-full py-4 px-4 font-bold text-white text-xl bg-regal-blue rounded-xl hover:bg-blue-900 ">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
