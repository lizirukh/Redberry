import React from 'react'
import './Landing.css'
import Logo from '../../assets/logo.png'
import Group1 from '../../assets/Group_1.png'

const Landing = () => {
  return (
    <div className="landing">
        <img src={Logo} alt="" className='logo'/>
        <img src={Group1} alt="" className='group1'/>
        <div className="landing_buttons">
            <button className="btn">ჩანაწერის დამატება</button>
            <button className="btn">ჩანაწერების სია</button>
        </div>
    </div>
  )
}

export default Landing