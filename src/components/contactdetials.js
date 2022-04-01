import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import OTPInput, { ResendOTP } from "otp-input-react";
import "../styles/contact.css";
import { Step, StepLabel, Stepper } from '@mui/material';
import logoImg from "../images/logo1.jpg"
export default function Formpage() {
    const [start, setStart] = useState(0);
    const [mobilenumber, setMobileNumber] = useState('');
    const [useremail, setUserEmail] = useState('');
    const [referralcode, setReferralCode] = useState('')
    const [emailError, setEmailError] = useState(false);
    const [verfied, setVerified] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [OTP, setOTP] = useState("");
    if (mobilenumber) {
        var mobilenumberTrim = "***" + mobilenumber.slice(-3);
    }
    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            if (seconds < 1) {
                setSeconds(0)
            }
            else {
                setSeconds(seconds - 1)

            }
        }, 1000);
        return () => clearInterval(timer);
    })

    var data_toggle, data_target;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const handleOnchange = (e) => {
        if (e.target.name == "mobilenumber") {
            if (isNaN(e.target.value)) {
                alert("Enter Number only")
            }
            else {
                setMobileNumber(e.target.value)
            }
        }
        if (e.target.name == "email") {
            if (e.target.value.match(validRegex)) {
                setUserEmail(e.target.value)
                setEmailError(false)
            }
            else {
                setUserEmail(e.target.value)

                setEmailError(true);
            }
        }
        if (e.target.name == "referralcode") {
            setReferralCode(e.target.value)

        }

    }
    const handleVerfify = () => {
        if (referralcode) {
            setVerified(true);
            alert("verified")
        }
    }
    const handleOtp = () => {
        setSeconds(seconds + 30)
    }
    const handlecloseModal = () => {
        // window.$('#exampleModalCenter').modal('show')
        window.$('#exampleModalCenter').modal('close')
    }
    const handleNext = () => {
        var c = 0;

        if (!(useremail && mobilenumber)) {
            c = 1;
            alert("Enter Detials ")
        }
        if (referralcode.length > 0) {
            if (verfied == false) {
                c = 1;
                alert("verify Detials ")
            }
        }
        if (c == 0) {
            window.$('#exampleModalCenter').modal('show')

            setSeconds(30);


        }
        console.log(referralcode, verfied);
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
                            <div class="progress">
                                <div class="progress-bar bg-secondary" role="progressbar" style={{ width: "20%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='box'>
                            <label>Mobile Number (linked with your adhaar)</label>
                            <br />
                            <input type="text" onChange={handleOnchange} value={mobilenumber} name='mobilenumber' />
                        </div>
                        <div className='box'>
                            <label>Email id (to recover your account detials)</label>
                            <br />
                            <input type="text" name='email' value={useremail} onChange={handleOnchange} />
                            {emailError ? <p style={{ color: "red" }}>Enter valid Email</p> : ""}
                        </div>
                        <div className='box'>
                            <label>Refferal code (opt)</label>
                            <a className='verfiy' onClick={handleVerfify}>verify</a>
                            <br />
                            <input type="text" value={referralcode} onChange={handleOnchange} name="referralcode" />
                        </div>
                        <button className='nextbtn' onClick={handleNext} data-toggle={data_toggle} data-target={data_target} >Next</button>
                    </div>
                    <div className='col col-lg-8'>
                        <h3></h3>
                        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                            Launch demo modal
                        </button> */}

                        <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                        <p>a six digit otp has sent to your number {mobilenumberTrim} </p>
                                        <p>Kindly enter it below <a href='#'>Wrong Number</a></p>

                                        <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure />

                                        <div>
                                            <a href='#' onClick={handleOtp}>Resend Otp</a> <span style={{ marginLeft: "240px" }}>0.{seconds} s</span>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handlecloseModal}>confirm otp</button>
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
