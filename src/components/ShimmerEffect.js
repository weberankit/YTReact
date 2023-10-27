const ShimmerEffect = () => {
    const boxes = new Array(15).fill(undefined);
  
    return (
      <>
        <div className="flex flex-wrap ml-5  sm:-m-3.5">
          {boxes.map((item, index) => (
            <div key={index} className=" m-3.5 p-2 animate-pulse bg-gray-200  w-80">
              <div className="flex flex-col">
                <div className=" w-full h-52 rounded-md bg-gray-400"></div>
                <div className=" w-full px-2">
                  <h1 className="font-bold bg-gray-400 h-6 w-2/5 mb-2 p-2 mt-3.5 animate-pulse"></h1>
                  <h6 className="font-thin text-sm bg-gray-400 h-4 w-2/5 p-2 animate-pulse"></h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  

export const  WatchShimmer=()=>{
    const boxes = new Array(1).fill(undefined);
  
    return (
      <>
        <div className=" ml-5  sm:-m-3.5 w-full">
          {boxes.map((item, index) => (
            <div key={index} className=" m-3.5 p-2 animate-pulse bg-gray-200  w-full">
              <div className="flex flex-col">
                <div className=" w-full  rounded-md bg-gray-400"></div>
                
              </div>
            </div>
          ))}
        </div>
      </>
    );
}



  export default ShimmerEffect;
  