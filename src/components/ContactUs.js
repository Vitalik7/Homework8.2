import React, {Component} from 'react'

class ContactUs extends Component {
    render() {
        return (
            <div className='contact-us'>
                <div className="wraper">
                    <h1>Contact Us</h1>
                    <hr className='left'/>
                    <span className='dot'></span>
                    <hr className='right'/>
                    <div>
                        <div className="contact-form">
                            <input type="text" name="browser" placeholder="Full Name"/>
                            <input type="text" name="browser" placeholder="E-mail Adress"/>
                            <input type="text" name="browser" placeholder="Message" className="textarea"/>
                        </div>
                        <div class="information-block">
                            <h4>Information</h4>
                            <p>
                                Proin nec dignissim tellus, ut hendrerit erat. Vivamus ut augue ac est sagittis
                                ullamcorper a porttitor nibh. Donec non tortor consequat, sollicitudin odio id, vehicula
                                lorem. Suspendisse a euismod sem. Mauris rutrum arcu a lorem aliquet feugiat. Praesent
                                tincidunt lacus at nisl pharetra, nec suscipit risus lobortis. Nunc vitae enim a quam
                                ultrices faucibus. Proin sit amet condimentum libero, ac dignissim enim. Praesent
                                aliquam lacinia dapibus.
                            </p>
                            <span>StreetName 163, 254 23 City</span>
                            <span className="phone">(+254) 001 454 333 66</span>

                            <a href="#" className="send">SEND MESSAGE</a>
                            <a href="#" className="view">VIEW MAP</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs
