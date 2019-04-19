import React from 'react';

// import CKEDITOR from 'ckeditor/ckeditor';

class CategoryModal extends React.Component {

    componentDidMount() {
      // CKEDITOR.replace('editor1');
    }

    render() {
        return(
            <div className="modal fade" id="addCategoryModal">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header bg-success text-white">
                      <h5 className="modal-title">Add Category</h5>
                      <button className="close" data-dismiss="modal">
                        <span>&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="title">Title</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-success" data-dismiss="modal">Save Changes</button>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default CategoryModal;