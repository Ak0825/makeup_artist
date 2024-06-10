import React from 'react'
import Nails from '../assets/Nails.jpg'
import Makeup from '../assets/MakeUp_artist.jpg'
import Hair from '../assets/Hair.jpg'
import Engegement from '../assets/engagement.jpg'
import Party from '../assets/party.jpg'
import './services.css'
const Service = () => {
    return (
        <div className='back text-light'>
            <div className="row">
                <h4 className='mb-5 pb-5'>Our Services</h4>
            </div>

            <div className="row mx-auto">
                <div className="col py-4 mx-auto d-flex justify-content-center">
                    <div className="card">
                        <div className="image">
                            <img href="#" src={Nails} />
                        </div>
                        <div className="content">
                            <h3>Nails</h3>
                            <p>DIn publishing and graphic design,   Lorem ipsum is a placeholder text  commonly used to demonstrate the visual form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>

                <div className="col py-4 mx-auto d-flex justify-content-center">
                    <div className="card">
                        <div className="image">
                            <img href="#" src={Makeup} />
                        </div>
                        <div className="content">
                            <h3 className='mt-3'>Bridal Makeup</h3>

                        </div>
                    </div>
                </div>

                <div className="col py-4 mx-auto d-flex justify-content-center">
                    <div className="card">
                        <div className="image">
                            <img href="#" src={Nails} />
                        </div>
                        <div className="content">
                            <h3>Reception Makeup</h3>
                            <p>DIn publishing and graphic design,   Lorem ipsum is a placeholder text  commonly used to demonstrate the visual form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>

                <div className="col py-4 mx-auto d-flex justify-content-center">
                    <div className="card">
                        <div className="image">
                            <img href="#" src={Party} />
                        </div>
                        <div className="content">
                            <h3>Party Makeup</h3>
                            <p>DIn publishing and graphic design,   Lorem ipsum is a placeholder text  commonly used to demonstrate the visual form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>

                <div className="col py-4 mx-auto d-flex justify-content-center">
                    <div className="card">
                        <div className="image">
                            <img href="#" src={Engegement} />
                        </div>
                        <div className="content">
                            <h3>Engagement Makeup</h3>
                            <p>DIn publishing and graphic design,   Lorem ipsum is a placeholder text  commonly used to demonstrate the visual form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>

                <div className="col py-4 mx-auto d-flex justify-content-center">
                    <div className="card">
                        <div className="image">
                            <img href="#" src={Nails} />
                        </div>
                        <div className="content">
                            <h3>Haldi / Mehndi Makeup</h3>
                            <p>DIn publishing and graphic design,   Lorem ipsum is a placeholder text  commonly used to demonstrate the visual form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>

                <div className="col py-4 mx-auto d-flex justify-content-center">
                    <div className="card">
                        <div className="image">
                            <img href="#" src={Hair} />
                        </div>
                        <div className="content">
                            <h3>Hair Styling</h3>
                            <p>DIn publishing and graphic design,   Lorem ipsum is a placeholder text  commonly used to demonstrate the visual form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

            </div>
        </div>
    )
}

export default Service