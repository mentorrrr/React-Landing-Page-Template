import React from 'react';

export const Contact = props => {
   return (
      <div>
         <div id="contact">
            <div className="container">
               <div className="col-md-8">
                  <div className="row">
                     <div className="section-title">
                        <h2>Get In Touch</h2>
                        <p>아래 버튼을 클릭하면 멘토와 대화할 수 있는 오픈 채팅방으로 연결됩니다.</p>
                     </div>

                     <div id="success"></div>
                     <button type="submit" className="btn btn-custom btn-lg">
                        Open Chatting in kakao talk
                     </button>
                  </div>
               </div>
               {/* <div className="col-md-3 col-md-offset-1 contact-info">
                  <div className="contact-item">
                     <h3>Contact Info</h3>
                     <p>
                        <span>
                           <i className="fa fa-map-marker"></i> Address
                        </span>
                        {props.data ? props.data.address : 'loading'}
                     </p>
                  </div>
                  <div className="contact-item">
                     <p>
                        <span>
                           <i className="fa fa-phone"></i> Phone
                        </span>{' '}
                        {props.data ? props.data.phone : 'loading'}
                     </p>
                  </div>
                  <div className="contact-item">
                     <p>
                        <span>
                           <i className="fa fa-envelope-o"></i> Email
                        </span>{' '}
                        {props.data ? props.data.email : 'loading'}
                     </p>
                  </div>
               </div> */}
               <div className="col-md-12">
                  <div className="row">
                     <div className="social">
                        <ul>
                           <li>
                              <a href={props.data ? props.data.facebook : '/'}>
                                 <i className="fa fa-github"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="footer">
            <div className="container text-center">
               <p>
                  &copy; 2025 software engineer tutoring program
               </p>
            </div>
         </div>
      </div>
   );
};
