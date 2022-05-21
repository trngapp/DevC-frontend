import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./card"
import Json from "./items.json"
const CarouselFunction =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      //const example = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const renderCard=()=>{

        var arr = [];
    Object.keys(Json).forEach(function(key) {
      arr.push(Json[key]);
    });
    arr.forEach((item)=>{
        console.log(item.description)
    })
    return(
        <Carousel swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}

        autoPlaySpeed={3000}
        keyBoardControl={true}

        transitionDuration={500}
        containerClass="carousel-container"


        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px">
{arr.map(item => <Card description={item.description} projectLeader={item.projectLeader} openings={item.openings} projectName={item.projectName}/> )}
</Carousel>

);
      };

    return (<>




 <div>
     {renderCard()}
 </div>





    </>)
}

export default CarouselFunction