import React from 'react'
import '../css/Form.css'

const Footer = () => {
    return (
        <div className="footer mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="mb-3 ">
                        <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                    </div>
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                            <a href="https://github.com/vmnbhuvani7"> Github: vmnbhuvani7</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
