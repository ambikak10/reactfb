import React, { Component } from 'react'
import './dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div className='container '>
        <div className='row margin'>
          <div className='col-xl-3 col-lg-3 col-md-3 grid'>
            <div className='appName'>REACT APP</div>
            <div>
              <a href='#'>
                <i className='fa fa-home' aria-hidden='true'>
                  <span className='menu' style={{ fontFamily: "Nunito Sans" }}>
                    Dashboard
                  </span>
                </i>
              </a>
      
                <i class='fa fa-star' aria-hidden='true'>
                  <span className='menu' style={{ fontFamily: "Nunito Sans" }}>
                    Reviews
                  </span>
                </i>
  

                <i class='fa fa-list' aria-hidden='true'>
                  <span className='menu' style={{ fontFamily: "Nunito Sans" }}>
                    Listings
                  </span>
                </i>


                <i class='fa fa-cog' aria-hidden='true'>
                  <span className='menu' style={{ fontFamily: "Nunito Sans" }}>
                    Settings
                  </span>
                </i>
        
            </div>
          </div>

          <div className='col-xl-9 col-lg-9 col-md-9' style={{position:"relative"}}>
            <div className="table">

            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard
