import React from 'react';

class Users extends React.Component{
    render() {
        return(
            <div>
            <header id="main-header" className="py-2 bg-warning text-white">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1>
                      <i className="fas fa-users"></i> Users</h1>
                  </div>
                </div>
              </div>
            </header>
          
            
            <section id="search" className="py-4 mb-4 bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 ml-auto">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search Users..."/>
                      <div className="input-group-append">
                        <button className="btn btn-warning">Search</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          
            
            <section id="users">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <div className="card-header">
                        <h4>Latest Users</h4>
                      </div>
                      <table className="table table-striped">
                        <thead className="thead-dark">
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Chakatpon Khunthong</td>
                            <td>giraffeman180@gmail.com</td>
                            <td>
                              <a href="/app/details" className="btn btn-secondary">
                                <i className="fas fa-angle-double-right"></i> Details
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Harry White</td>
                            <td>harry@yahoo.com</td>
                            <td>
                              <a href="/app/details" className="btn btn-secondary">
                                <i className="fas fa-angle-double-right"></i> Details
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Mary Johnson</td>
                            <td>mary@gmail.com</td>
                            <td>
                              <a href="/app/details" className="btn btn-secondary">
                                <i className="fas fa-angle-double-right"></i> Details
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
        );
    }
}

export default Users;
