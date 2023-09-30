import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Pet = ({ name, animal, breed, images, location, id , description }) => {
  const [expand , setExpand] = useState(false)
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className=" bg-white flex flex-col pb-2 rounded-2xl">
      <div className="image-container">
        <img className="object-cover w-full aspect-3/2" src={hero} alt={name} />
        <span className="chip">
          {animal} - {breed}
        </span>
      </div>
      <div className="p-4">
        <h1 className="text-regal-blue font-bold text-2xl mb-2 ">{name}</h1>
        <h2 className="text-lg text-gray-500 mb-2">
          <FontAwesomeIcon icon={faLocationDot} /> {location}{" "}
        </h2>
        <p className="text-gray-400">
          {expand == false ? description.substring(0,50)+"..." : description }
          <span onClick={()=>{
            setExpand(prev=>!prev)
          }} className="font-bold text-blue-800">
            {
          expand == true ? "See less" : "See more"
          }</span>
        </p>
      </div>
    </Link>
  );
};

export default Pet;
