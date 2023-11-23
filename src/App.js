import './App.css';
import Kenya from './mm/kkenya.jpg';
import Rwanda from './mm/rrwanda.jpg';
import Tz from './mm/ttanz.jpg';
import Ug from './mm/uug.jpg';
function App() {
  return (
    <div className="App">
    <div className="tea-maps">
      <div className="kenya-map">
        <img
          src={Kenya}
          alt="Atlas Tea Brokers Kenyan Map"
          title="Atlas Tea Brokers Kenyan Map"
          loading="lazy"
        />
      </div>
      <div className="tz-map">
        <img
          src={Tz}
          alt="Atlas Tea Brokers Tanzania Map"
          title="Atlas Tea Brokers Tanzania Map"
          loading="lazy"
        />
        </div>
      <div className="ug-map">
        <img
          src={Ug}
          alt="Atlas Tea Brokers Uganda, Burundi Map"
          title="Atlas Tea Brokers Uganda, Burundi Map"
          loading="lazy"
        />
      </div>
      <div className="rwanda-map">
        <img
          src={Rwanda}
          alt="Atlas Tea Brokers Rwanda Map"
          title="Atlas Tea Brokers Rwanda Map"
          loading="lazy"
        />
      </div>
      <div className="overlay">
        <div className="services">
            <h2>OUR SERVICES<hr/></h2>    
             <div className="service">
               
                <p className="open">As a specialized tea brokerage firm, we offer a comprehensive range of services 
                tailored to meet the unique needs of both tea producers and buyers:</p>
                <div className="service-table">
                    <div className="row">
                        <ul>
                            <div className="col">
                                <li>
                                    <h4>An Auction House</h4>
                                    
                                    <p>We sell teas at the Mombasa Tea Auction under the rules and 
                                    regulations set by the East Africa Tea Trade Association (EATTA).<br/>
                                    
                                     Our team of experts carefully handles the pre-auction
                                      preparation to post-auction follow-ups, ensuring seamless transactions and maximum
                                       returns for our producers.</p>
                                       
                                </li>

                                 <li>
                                    <h4>Technical Support</h4>
                                    <p>For producers  seeking to improve the quality of their teas, our team of experts audits factory processes to enhance
                                        and bridge any gaps.
                                        <br/>
                                        We connect buyers to the source.<br/>
                                        </p>
                                </li>

                               
                                
                               
                            </div>
                            
                            <div className="col">
                                 <li>
                                    <h4>Training</h4>
                                    <p>We are dedicated to securing the future of the tea industry by
                                     offering comprehensive internship programs to young people within the region.<br/> Through these programs, participants gain invaluable expertise
                                       and hands-on experience that aligns perfectly with the demands of the tea industry.
                                       </p>
                                </li>

                                  <li className="net">
                                    <h4>Networking</h4>
                                    

                                    <p>We Know Tea people and Tea places.</p>
                                          
                                </li>
                                
                               
                               
                               
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
      

    </div>
    </div>
    </div>
  );
}

export default App;
