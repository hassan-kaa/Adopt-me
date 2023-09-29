import { Component } from "react";
import useBreedList from "./useBreedList";

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
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index == active ? "active" : ""}
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
