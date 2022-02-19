import React from 'react';
import Gallery from 'react-grid-gallery';
import {IMAGES} from './CertificateList';
function Certificate(){
    return (
        <>
            <div className="CertificateWrapper" id="certificate">
                <div className="Container">
                    <div className="SectionTitle">Certificate</div>
                        <Gallery images={IMAGES}/>
                </div>
            </div>
        </>
    )
}

export default Certificate;