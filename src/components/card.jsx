import React from 'react'

const card = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://i.pinimg.com/236x/6d/f4/e3/6df4e3a7ad6e65baa83907faf3d55b79.jpg" alt=""/>
          <img className='player' src={props.imag}></img>
          {/* <button>Save<Bookmark /> </button> */}
        </div>
        <div className="center">
          <div className="col"><h3>{props.pace}</h3>
          <h3>{props.shoot}</h3>
          <h3>{props.pass}</h3></div>
          <div className="col"><h3>{props.dri}</h3>
          <h3>{props.def}</h3>
          <h3>{props.phy}</h3></div>
        </div>
        {/* <div className="bottom">
          <div>
              <h3>$120/hour</h3>
              <p>jharkhand</p>
          </div>
          <button>apply now</button>
        </div> */}
      </div>
    </div>
  )
}

export default card
