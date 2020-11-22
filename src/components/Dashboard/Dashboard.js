import React, { Component } from 'react'
import './dashboard.css'
import FacebookPage from '../FacebookPage/FacebookPage'
import fbsdk from "../../fb-sdk";


class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      source : 'Facebook',
      pageName: [],
      address: null,
    }
  }

componentDidMount () {
    const isFbSDKInitialized = fbsdk();
    const id = this.props.location.state.id;
    const access = this.props.location.state.access;
    console.log(this.props);
    console.log(access);
    console.log(id);
    // if (isFbSDKInitialized){
      window.FB.api(
        `https://graph.facebook.com/${this.props.location.state.id}/accounts?access_token=${this.props.location.state.access}`,
        "GET",
        {},
        function (response) {
          console.log(response); //need to use this response to fill data in dashboard table. But for that, how to acess and store this response?
          this.setState = {
            pageName : response.data
          }
        }
       
      )
    // }
    
  }

          
  
  render() {
  console.log(this.state.pageName)
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

                <i className='fa fa-star' aria-hidden='true'>
                  <span className='menu' style={{ fontFamily: "Nunito Sans" }}>
                    Reviews
                  </span>
                </i>

                <i className='fa fa-list' aria-hidden='true'>
                  <span className='menu' style={{ fontFamily: "Nunito Sans" }}>
                    Listings
                  </span>
                </i>

                <i className='fa fa-cog' aria-hidden='true'>
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

              <table className='table'>
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
