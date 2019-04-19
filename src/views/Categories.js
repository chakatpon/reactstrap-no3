import React from 'react';

class Categories extends React.Component {
    render() {
        return(
            <div>
                <header id="main-header" class="py-2 bg-success text-white">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-6">
                          <h1>
                            <i class="fas fa-folder"></i> Categories</h1>
                        </div>
                      </div>
                    </div>
                  </header>

                  
                  <section id="search" class="py-4 mb-4 bg-light">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-6 ml-auto">
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search Categories..."/>
                            <div class="input-group-append">
                              <button class="btn btn-success">Search</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  
                  <section id="categories">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className="card">
                            <div className="card-header">
                              <h4>Latest Categories</h4>
                            </div>
                            <table className="table table-striped">
                              <thead className="thead-dark">
                                <tr>
                                  <th>#</th>
                                  <th>Title</th>
                                  <th>Date</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Web Development</td>
                                  <td>May 10 2019</td>
                                  <td>
                                    <a href="/app/details" className="btn btn-secondary">
                                      <i className="fas fa-angle-double-right"></i> Details
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Tech Gadgets</td>
                                  <td>May 11 2019</td>
                                  <td>
                                    <a href="/app/details" className="btn btn-secondary">
                                      <i className="fas fa-angle-double-right"></i> Details
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Business</td>
                                  <td>May 13 2019</td>
                                  <td>
                                    <a href="/app/details" className="btn btn-secondary">
                                      <i className="fas fa-angle-double-right"></i> Details
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Health & Wellness</td>
                                  <td>May 15 2019</td>
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

export default Categories;