import React from 'react';
import './index.css';

const ContactList = (props)=>{

    return(
            <div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" onChange={(e)=>props.handleChange(e,'email') }
                                   value ={props.controls.email}
                                   className="form-control" id="inputEmail4" placeholder="Email"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password"
                                   value ={props.controls.password}
                                   onChange={(e)=>props.handleChange(e,'password')}
                                   className="form-control" id="inputPassword4" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text"
                               value ={props.controls.address}
                               onChange={(e)=>props.handleChange(e,'address')}
                               className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text"
                                   value={props.controls.city}
                                   onChange={(e)=>props.handleChange(e,'city')}
                                   className="form-control" id="inputCity"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select onChange={(e)=>props.handleChange(e,'state')}
                                    id="inputState" className="form-control">
                                <option value =''>Choose</option>
                                <option value='Bangkok' selected={props.controls.state === 'Bangkok'?'selected' : ''}>Bangkok</option>
                                <option value='Singapore' selected={props.controls.state === 'Singapore'?'selected' : ''}>Singapore</option>

                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text"
                                   value={props.controls.zip}
                                   onChange={(e)=>props.handleChange(e,'zip')}
                                   className="form-control" id="inputZip"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input"
                                   checked={props.controls.terms ? 'checked': ''}
                                   onChange={(e)=>props.handleChange(e,'terms')}
                                   type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={props.handleSubmit}>Sign in</button>
                </form>
                <div className={`modal ${props.isModal === true ? 'd-block show':'d-none fade'}`}
                     id="exampleModalLong" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLongTitle"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Contact Submission</h5>
                                <button type="button" className="close" onClick={props.modalClose}
                                        data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h2>Your form has been submitted!</h2>
                            </div>
                            <div className="modal-footer">
                                <button onClick={()=>props.modalClose()} type="button"
                                        className="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" onClick={props.saveForm} className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ContactList;