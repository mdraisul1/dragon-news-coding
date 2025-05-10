import React from 'react'
import swimming from '../../assets/swimming.png'
import classImage from '../../assets/class.png'
import playImage from '../../assets/playground.png'

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3 rounded-md">
      <h2 className="font-bold text-[20px]">Q-Zone</h2>
      <div>
        <img src={swimming} alt="" />
        <img src={classImage} alt="" />
        <img src={playImage} alt="" />
      </div>
    </div>
  );
}

export default Qzone
