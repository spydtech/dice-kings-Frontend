import React from 'react'
import './Cube.css'
const LoginCube2 = () => {
  return (
    <>
        <div className="loaderViewPort">
  <div className="loader">
    <div className="side front">
      <div className="dot" />
    </div>
    <div className="side back">
      <div className="dotContainer">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </div>
    <div className="side left">
      <div className="dotContainer">
        <div className="dot" />
        <div className="dot" />
      </div>
    </div>
    <div className="side right">
      <div className="dotContainer">
        <div className="subDotContainer">
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="subDotContainer">
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </div>
    <div className="side top">
      <div className="dotContainer">
        <div className="subDotContainer">
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="subDotContainer">
          <div className="dot" />
        </div>
        <div className="subDotContainer">
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </div>
    <div className="side bottom">
      <div className="dotContainer">
        <div className="subDotContainer">
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="subDotContainer">
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="subDotContainer">
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default LoginCube2