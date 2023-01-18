import { IMG_CDN_URL } from "../constants";
import { FaStar } from "react-icons/fa";
import {TbDiscount2 } from "react-icons/tb";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  slaString,
  costForTwoString,
  aggregatedDiscountInfo
}) => {
  return (
    <div className="card">
   
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h4  className="restaurant-name">{name}</h4>
      <p className="restaurant-cuisines">{cuisines.join(", ")}</p>
   
   
      <div className="price-div">
        <p className="rating" color={avgRating==="--"?"black":"white"} style={+avgRating>=4?{backgroundColor:"#48C479",color:"#ffffff"}:avgRating==="--"?{backgroundColor:"#ffffff"}:{backgroundColor:"#DA7C39",color:"#ffffff"}}>
        {/* Number(avgRating)>=4.0? :"#DA7C39" */}
          <FaStar className="card-rating-icon" color={avgRating==="--"?"black":"white"} />
          {/* <CiDiscount1 color="black" /> */}
          
          
          {avgRating}
        </p>
        <h4 className=".price-dots">.</h4>
        <p>{slaString}</p>
        <h4 className=".price-dots">.</h4>
        <p>{costForTwoString}</p>
      </div>
      <hr className="cardhrline" />
      <p className="card-discount">
      <TbDiscount2 className="card-discount-icon" />{
        aggregatedDiscountInfo?.shortDescriptionList[0]?.meta
      }
      </p>
 
    </div>
  );
};

export default RestrauntCard;
