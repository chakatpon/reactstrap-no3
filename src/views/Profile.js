import React from 'react';

import avatar from '../assets/img/avatar.png';

class Profile extends React.Component {
    render() {
        return(
            <div>
                <header id="main-header" className="py-2 bg-primary text-white">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h1>
                          <i className="fas fa-user"></i> Edit Profile</h1>
                      </div>
                    </div>
                  </div>
                </header>

            
                <section id="actions" className="py-4 mb-4 bg-light">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="/" className="btn btn-light btn-block">
                          <i className="fas fa-arrow-left"></i> Back To Dashboard
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#" className="btn btn-success btn-block">
                          <i className="fas fa-lock"></i> Change Password
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#" className="btn btn-danger btn-block">
                          <i className="fas fa-trash"></i> Delete Account
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

            
                <section id="profile">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="card">
                          <div className="card-header">
                            <h4>Edit Profile</h4>
                          </div>
                          <div className="card-body">
                            <form>
                              <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" value="Chakatpon Khunthong"/>
                              </div>
                              <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" value="giraffeman180@gmail.com"/>
                              </div>
                              <div className="form-group">
                                <label htmlFor="bio">Bio</label>
                                <textarea className="form-control" name="editor1" value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde at fugiat explicabo temporibus, tempora animi sunt iusto quod beatae optio veritatis velit natus odit error! Possimus esse quisquam quibusdam eveniet autem! Minus dolore quisquam nemo similique doloribus perspiciatis tempore."></textarea>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h3>Your Avatar</h3>
                        <img src={avatar} alt="" className="d-block img-fluid mb-3"/>
                        <button className="btn btn-primary btn-block">Edit Image</button>
                        <button className="btn btn-danger btn-block">Delete Image</button>
                      </div>
                    </div>
                  </div>
                </section>
            </div>
        );
    }
}

export default Profile;