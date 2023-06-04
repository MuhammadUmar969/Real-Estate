import React from 'react'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {MdMessage} from 'react-icons/md'
import contact from '/public/images/contact.jpg'

const Contact = () => {
  return (
    <>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
              <span className="orangeText">
                Our Contact Us
              </span>
              <span className="primaryText">
                Easy to contact us
              </span>
              <span className="secondaryText">
              We always ready to help by providing the best services for you. We believe a good place to live can make your life better
              </span>

              <div className="flexColStart contactModes">

                <div className="flexStart row">
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                          <MdCall size={25} />
                        </div>
                        <div className="flexColStart details">
                            <span className="primaryText">Call</span>
                            <span className="secondaryText">021 123 145 14</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Call Now</div>
                  </div>

                  <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                          <BsFillChatDotsFill size={25} />
                        </div>
                        <div className="flexColStart details">
                            <span className="primaryText">Chat</span>
                            <span className="secondaryText">021 123 145 14</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Chat Now</div>
                  </div>
                </div>

                <div className="flexStart row">
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                          <BsFillChatDotsFill size={25} />
                        </div>
                        <div className="flexColStart details">
                            <span className="primaryText">Video Call</span>
                            <span className="secondaryText">021 123 145 14</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Video Call Now</div>
                  </div>

                  <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                          <MdMessage size={25} />
                        </div>
                        <div className="flexColStart details">
                            <span className="primaryText">Message</span>
                            <span className="secondaryText">021 123 145 14</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Message Now</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="c-right">
              <div className="img-container">
                <img src={contact} alt="contact" />
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
