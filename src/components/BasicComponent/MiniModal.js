import React from 'react'
import FormModal from './FormModal'

export default function MiniModal(){
return(
  <div className="modal fade modal-mini modal-primary modal-mini" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header justify-content-center">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
          <i className="tim-icons icon-simple-remove text-white"></i>
        </button>
        <div className="modal-profile">
          <i className="tim-icons icon-single-02"></i>
        </div>
      </div>
      <div className="modal-body">
        <p>Always have an access to your profile</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-link btn-neutral">Back</button>
        <button type="button" className="btn btn-link btn-neutral" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
{/* <!-- Form Modal --> */}
<FormModal/>
{/* <!--  End Modal --> */}
</div>
)
}