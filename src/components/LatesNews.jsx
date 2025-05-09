import React from 'react'
import Marquee from 'react-fast-marquee';

const LatesNews = () => {
  return (
    <div className="w-10/12 mx-auto flex items-center gap-3 my-8 bg-base-200 p-3">
      <p className="bg-secondary text-white px-3 py-2">Lates</p>
      <Marquee speed={100} gradient={true} pauseOnHover={true}>
        <p className='font-bold'>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
}

export default LatesNews
