import React, { useEffect, useState } from 'react';
import "./CSS/Fundform.css";
import "./CSS/Stratergy.css";
import "./CSS/Addteam.css"; // Imported the Addteam CSS here
import Errortext from './elements/Errortext';
import axios from 'axios';
import Addperfomance from './containers/Addperfomance';
import Performance from './containers/Performance';

function FundForm({ all_details }) {
  const [fund_details, setfund_details] = useState({});
  const [team_details, setteam_details] = useState({});

  // Effect for setting fund and team details based on all_details prop
  useEffect(() => {
    if (all_details && all_details.length > 0) {
      setfund_details((prev) => ({ ...prev, fund_id: all_details[0]?.id }));
      setteam_details((prev) => ({ ...prev, fund_id: all_details[0]?.id, team_id: all_details[0]?.team_id }));
    }
  }, [all_details]);

  // Function to handle fund details submission
  const add_team = async () => {
    try {
      let response = await axios.post("http://localhost:5000/api/v1/funds/addteamdetails", team_details);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const add_fund = async () => {
    try {
      let response = await axios.post("http://localhost:5000/api/v1/funds/addfundsdetail", fund_details);
      console.log(response);

      add_team()
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className='fundform-structure'>
        <div className='fundform-setter'>
          <div className='fundform-scroll'>
            <div className='Fundform'>
              <div className='Fundform-top-section'>
                <h3>Last saved 15 minutes ago</h3>
                <button className='save-button' onClick={add_fund}>Save</button>
              </div>

              <div className="upload-logo-section">
                <h3>Upload logo</h3>
                <span className="material-symbols-outlined">upload_file</span>
                <div>
                  <h4>MLlogo.jpg</h4>
                  <span>Remove</span>
                </div>
                <Errortext value={"Error text"} />
              </div>

              <div className='br'>
                <br />
              </div>

              <div className='stratergy'>
                <h3>About the Strategy</h3>
                <textarea name="" id="" rows={5} placeholder='Maximum 500 characters'
                  onChange={(e) => setfund_details({ ...fund_details, description: e.target.value })}
                ></textarea>
                <Errortext value={"Error text"} />

                <div className='stratergy-second-section'>
                  <div className='inner-second-section'>
                    <div>
                      <h4>Firm assets</h4>
                      <input type="text" placeholder='in numbers'
                        onChange={(e) => setfund_details({ ...fund_details, firm_assets: e.target.value })}
                      />
                      <Errortext value={"Error text"} />
                    </div>
                    <div>
                      <h4>Strategy assets</h4>
                      <input type="text" placeholder='in numbers'
                        onChange={(e) => setfund_details({ ...fund_details, strategy_assets: e.target.value })}
                      />
                      <Errortext value={"Error text"} />
                    </div>
                  </div>
                  <div>
                    <h4>Url of the strategy</h4>
                    <input type="text" placeholder='https://www.swiftfolios.co.uk/funds/'
                      onChange={(e) => setfund_details({ ...fund_details, strategy_url: e.target.value })}
                    />
                    <Errortext value={"Error text"} />
                  </div>
                </div>
              </div>

              <div className='br'>
                <br />
              </div>

              {/* Team Section */}
              <div className='Addteam'>
                <h3>Team</h3>
                <div className="Addteam-input-section">
                  <div>
                    <h4>Please enter persons name below.</h4>
                    <input type="text" placeholder='Name'
                      onChange={(e) => setteam_details({ ...team_details, name: e.target.value })}
                    />
                    <Errortext value={"Error text"} />
                  </div>
                  <div>
                    <h4>Designation</h4>
                    <input type="text" placeholder='Designation'
                      onChange={(e) => setteam_details({ ...team_details, designation: e.target.value })}
                    />
                    <Errortext value={"Error text"} />
                  </div>
                </div>

                <div className='Description-section'>
                  <h4>Description</h4>
                  <textarea name="" id="" rows={5} placeholder='Maximum 500 characters'
                    onChange={(e) => setteam_details({ ...team_details, description: e.target.value })}
                  ></textarea>
                  <Errortext value={"Error text"} />

                  <div className='inner-description-section'>
                    <h4>LinkedIn url (optional)</h4>
                    <input type="text" placeholder='https://...'
                      onChange={(e) => setteam_details({ ...team_details, linkedin_url: e.target.value })}
                    />
                  </div>

                  <div className='description-button-section'>
                    <button onClick={add_team}>Add team member</button>
                    <button>Delete</button>
                  </div>
                </div>
              </div>

              <div className='br'>
                <br />
              </div>

              {/* Performance Section */}
              <Performance />
              <Addperfomance />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FundForm;