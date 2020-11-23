import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";
import './updateInfo.css'

class UpdateInfo extends Component {

  constructor(){
    super()
    this.state ={
      
    }
  }
  render() {
    return (
      <Fragment>
        <div className='profile-form-container'>
          <div className='card profile-form-card'>
            <div className='card-body profile-form-card-body'>
              <h3 style={{ textAlign: "center" }}>Edit details</h3>
              <hr className='profile-form-horizontal-line' />

              <form onSubmit={this.onSubmit}>
                <div className='form-group row profile-form-row'>
                  <label className='col-lg-3 col-form-label'>Update About field</label>
                  <input
                    type='text'
                    className='form-control col-lg-9'
                    name='handle'
                    value={this.state.handle}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group row profile-form-row'>
                  <label className='col-lg-3 col-form-label'>Website</label>
                  <input
                    type='text'
                    className='form-control col-lg-9'
                    name='website'
                    value={this.state.website}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group row profile-form-row'>
                  <label className='col-lg-3 col-form-label'>Bio</label>
                  <textarea
                    className='form-control col-lg-9'
                    name='bio'
                    value={this.state.bio}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group row profile-form-row'>
                  <label className='col-lg-3 col-form-label'>Phone</label>
                  <input
                    type='tel'
                    className='form-control col-lg-9'
                    name='phone'
                    value={this.state.phone}
                    onChange={this.onChange}
                  />
                </div>

                <div style={{ marginTop: "30px", textAlign: "center" }}>
                  <input
                    type='submit'
                    value='Submit'
                    className='btn btn-primary'
                    style={{ marginRight: "10px" }}
                  />
                  <Link to='/home' className='btn btn-secondary'>
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UpdateInfo
