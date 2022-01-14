import Header from '../../components/common/header.js';
import BackButton from '../../components/common/backButton.js';
import InfoBlock from '../../components/home/infoBlock.js';
import RequestFooter from '../../components/request/requestFooter.js'
import React from 'react'
import Dropzone from 'react-dropzone'

import './requestMain.css';

function RequestMain() {
    return (
        <div className="request-main">
            <Header/>
            <div className="back-btn-wrapper">
                <div className="custom-container">
                    <BackButton/>
                </div>
            </div>
            <InfoBlock/>
            <div className="flex-container theme-dark-black-background request-description-wrapper">
                <div className="request-description theme-black-soft-gray">
                    <div className="one-to-one">request video answer</div>
                    <div className="description-title">Why requesting a video answer</div>
                    <div className="description-content">
                        If you're looking for tactical, actionable advice about growing a creative business, 
                        finding more clients, and building scalable processes, Ben is a great fit.
                        <br/>
                        <br/>
                        Enter your question below. Be as specific as possible to get the answer you’re looking for. 
                        You will receive an answer within 48hs.
                    </div>
                </div>
                <div className="request-question-wrapper">
                    <span>Question</span>
                    <textarea placeholder="Enter your question"></textarea>
                </div>
                <div className="request-upload-wrapper">
                    <div className="upload-text">
                        <span>Upload an image or video</span>
                        <span>Optional</span>
                    </div>
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                            <section className="dropzone-section">
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <div className="dropzone-div">
                                        <img src="/assets/svg/upload.svg"/>
                                        <p> Drag & drop your files here or <a>browse</a> </p>
                                    </div>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>
            </div>
            <RequestFooter/>
        </div>
    );
}

export default RequestMain;