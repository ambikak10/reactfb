import React, { Component } from 'react'
import './dashboard.css'
import FacebookPage from '../FacebookPage/FacebookPage'
class Dashboard extends Component {
  render() {
    return (
      <div className='container '>
        <div className='row margin'>
          <div className='col-xl-3 col-lg-3 col-md-3 grid'>
            <div className='appName'>REACT APP</div>
            <div>
              <div className='selected'>
                <a href='#' className='selected'>
                  <i className='fa fa-home' aria-hidden='true'>
                    <span
                      className='menu'
                      style={{ fontFamily: "Nunito Sans" }}
                    >
                      Dashboard
                    </span>
                  </i>
                </a>
              </div>

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

          <div
            className='col-xl-9 col-lg-9 col-md-9'
            style={{ position: "relative" }}
          >
            {/* <div className='table'> */}
            {/* <div className='pages'>PAGES</div> */}
            {/* <div className='row'>
                <FacebookPage />
              </div> */}

            <table class='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Source</th>
                  <th scope='col'>Page name</th>
                  <th scope='col'>Address</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <FacebookPage />
            </table>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Dashboard;
