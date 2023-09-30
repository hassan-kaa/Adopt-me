import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import fetchPet from "../services/fetchPet";
import Carousel from "../components/Carousel";
import ErrorBoundary from "../components/ErrorBoundary";
import { useContext, useState } from "react";
import Modal from "../components/Modal";
import AdoptedPetContext from "../services/AdoptedPetContext";

function Details() {
  const navigate = useNavigate();
  const [adoptedPet, setAdoptedPet] = useContext(AdoptedPetContext);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  if (results.isError) {
    return <div>{results.error}</div>;
  }
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="m-0 animate-spin">e</h2>
      </div>
    );
  }
  const pet = results.data.pets[0];
  return (
    <div className="bg-blue p-4">
      <Carousel images={pet.images} />
      <div className="flex flex-col items-center" >
        <h1 className="text-4xl text-regal-blue font-bold" >{pet.name}</h1>
        <h2>
          {pet.animal}-{pet.breed}-{pet.city}, {pet.state}
        </h2>
        <button className="text-xl py-2 px-4 rounded-lg bg-green-600 text-white font-bold" onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p className="text-center" >{pet.description}</p>
      </div>
      {showModal ? (
        <Modal>
          <div>
            <h1>Would you like to adopt {pet.name} ?</h1>
            <div className="p-5 bg-black text-white">
              <button
                onClick={() => {
                  setAdoptedPet(pet);
                  navigate("/");
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
}
function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
