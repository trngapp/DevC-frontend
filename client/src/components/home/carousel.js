/* eslint-disable */
import React ,{useEffect,useState}from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./card"
import Ca from "./card12"
import Load from "../loading.js"
//import Json from "./items.json"
import axios from "axios"
const CarouselFunction =({Type})=>{
  var p=[];
 var [arr,setarr]=useState([]);
 var [loads,setload]=useState(true);

 useEffect(()=>{
   console.log(arr);
   //console.log(arr.length);

  var type=Type;
  var server=process.env.REACT_APP_server;
  axios.get(`https://main--polite-syrniki-ad57c8.netlify.app/.netlify/functions/api/projectinfo/all?type=${type}`).then((res)=>{
    console.log(res.data);
    //const Json=res.data[0];
    const Json=res.data;

    var d=[];
    Object.keys(Json).forEach(function(key) {
      d.push(Json[key]);
    })
    //d.push(Json);

    setarr(d);

    console.log(d);



}).catch((error)=>{
// console.log(error.response.data);


})

setTimeout(()=>{
  setload(false);
  },1000)
 },arr)

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

        /*var arr = [];
    Object.keys(Json).forEach(function(key) {
      arr.push(Json[key]);
    });
    arr.forEach((item)=>{
        console.log(item.description)
    })*/




    return(
        <Carousel swipeable={false}
        draggable={false}
        //showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}

        autoPlaySpeed={3000}
        keyBoardControl={true}

        transitionDuration={500}
        containerClass="carousel-container"


        //dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px">

{/*{arr[0]!==undefined ? */}
{arr[0]!==undefined ? arr.map(item => <Card description={item?item.project_desc:""} projectLeader={item?item.leader_email:""} openings={item?item.opening_number:""} projectName={item?item.project_name:""}/> ):<Ca/>}
</Carousel>

);
      };

    return (

    <>
    {loads===true?<Load/>:



 <div>
     {renderCard()}
 </div>



}

    </>)
}

export default CarouselFunction