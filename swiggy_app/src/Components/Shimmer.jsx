import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Shimmer = () => {
    return (
      <SkeletonTheme baseColor="lightgray" highlightColor="white">
      <div style={{width:"100%", height:"250px"}}>
        <Skeleton width={"100%"} height={"100%"} />
      </div>
      <div className="restaurant-list">
        {Array(20)
          .fill("")
          .map((e, index) => (
            <div className='card' key={index} style={{border:"1px solid lightgray",borderRadius:"5px"}}>
            <Skeleton  width={"100%"} height={150} />
           <h1><Skeleton /></h1> 
           <h2><Skeleton /></h2>
           <p><Skeleton /></p> 
            </div>
          ))}
          
          
          
      </div>
      </SkeletonTheme>
    );
  };
  
  export default Shimmer;