import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            
            <footer id="main-footer" className="bg-dark text-white mt-5 p-5">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p className="lead text-center">
                      Copyright &copy;{" "}
                      <span id="year">{new Date().getFullYear()}</span>
                      {" "}Chakatpon Khunthong
                    </p>
                  </div>
                </div>
              </div>
            </footer>
        );
    }
}

export default Footer;