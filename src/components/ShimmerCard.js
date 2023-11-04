import React from 'react';

const ShimmerCard = () => {
  return (
   <div  key="223544" className='flex  flex-wrap '>
      {Array(30)
        .fill("")
        .map((e, index) => (
         <div key={index}  className="m-2  w-[300px] h-64 bg-gray-300 relative overflow-hidden"></div>
        ))}
        </div>
  );
};

export default ShimmerCard;
