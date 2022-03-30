import React, { useState } from 'react'
import "../styles/contact.css";
import { Step, StepLabel, Stepper } from '@mui/material';
import logoImg from "../images/logo1.jpg"
export default function Formpage() {
    const [start, setStart] = useState(0);
    const handleNext = () => {
        setStart(start + 1);
    }
    return (
        <div>
            <div className='row'>
                <div className='col col-lg-4'>
                    <div>
                        <img src={logoImg} />
                    </div>
                    <div className='container'>
                        <Stepper orientation='vertical' activeStep={start}>
                            <Step>
                                <StepLabel>
                                    Contact detials
                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>
                                    Identity verification
                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>
                                    Basic detials
                                </StepLabel>
                            </Step>
                        </Stepper>
                    </div>
                </div>
                {start < 1 ? <div className='col col-lg-8'>
                    <div className='formarea'>
                        <h2>Open a savings account</h2>
                        <div>
                            <label>step 1 of 3</label>
                            <h5>Help us with contact detials</h5>
                            <hr />
                        </div>
                        <div className='box'>
                            <label>Mobile Number (linked with your adhaar)</label>
                            <p>8564839373</p>
                        </div>
                        <div className='box'>
                            <label>Email id (to recover your account detials)</label>
                            <p>kar@gmail.com</p>
                        </div>
                        <div className='box'>
                            <label>Refferal code (opt)</label>
                            <span className='verfiy'>verify</span>
                            <p>9373</p>
                        </div>
                        <button className='nextbtn' data-toggle="modal" data-target="#exampleModalCenter">Next</button>
                    </div>
                    <div className='col col-lg-8'>
                        <h3></h3>
                        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                            Launch demo modal
                        </button> */}

                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">otp verification</h5>
                                        <div>
                                        </div>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p>a six digit otp has sent to your number </p>
                                        <p>Kindly enter it below</p>
                                        <input />
                                        <input />
                                        <input />
                                        <input />
                                        <input />
                                        <input />
                                        <div>
                                            <a href='#'>Resend Otp</a> <span style={{ marginLeft: "240px" }}>0.30s</span>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleNext}>confirm otp</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div> : ""

                }
            </div>


        </div>
    )
}
