import { Component } from "react";
import useBreedList from "../services/useBreedList";

class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="flex flex-col justify-center flex-nowrap items-center">
        <img src={images[active]} alt="animal hero" className="rounded-full w-60 h-60" />
        <div className="my-5 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {images.map((photo, index) => (
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index == active ? "rounded-xl opacity-50 w-40 h-40 " : "rounded-xl w-40 h-40"}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
//if we need to use a hook since its not feasable with class components , we can do as the following
// function CarouselParent({animal}){
//     const [breedList]=useBreedList(animal);
//     return <Carousel breedList={breedList}/>
// }
export default Carousel;
