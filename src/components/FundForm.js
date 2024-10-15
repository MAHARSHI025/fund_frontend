import React, { useEffect, useState } from 'react'
import "./CSS/Fundform.css"
import "./CSS/Stratergy.css"
import Errortext from './elements/Errortext'
import Addteam from './containers/Addteam'
import Update from './Update'
import Factsheet from './Factsheet'
import Navbar from './Navbar'
import Button from './elements/Button'
import Performance from './containers/Performance'
import axios from 'axios'
import Addperfomance from './containers/Addperfomance'


function FundForm({ all_details }) {

  const [fund_details, setfund_details] = useState({})

  useEffect(() => {
    setfund_details((prev) => ({ ...prev, fund_id: all_details[0]?.id }));

  }, [all_details])




  const add_fund = async () => {
    try {

      let responce = await axios.post("http://localhost:5000/api/v1/funds/addfundsdetail", fund_details)
      console.log(responce);

    } catch (error) {
      console.log(error);
    }
  }



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
                <span className="material-symbols-outlined">
                  upload_file
                </span>
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
                      <input type="text" name="" id="" placeholder='in numbers'
                        onChange={(e) => setfund_details({ ...fund_details, firm_assets: e.target.value })}
                      />
                      <Errortext value={"Error text"} />
                    </div>
                    <div>
                      <h4>Strategy assets</h4>
                      <input type="text" name="" id="" placeholder='in numbers'
                        onChange={(e) => setfund_details({ ...fund_details, strategy_assets: e.target.value })}
                      />
                      <Errortext value={"Error text"} />
                    </div>
                  </div>
                  <div>
                    <h4>Url of the strategy</h4>
                    <input type="text" name="" id="longer-input" placeholder='https://www.swiftfolios.co.uk/funds/'
                      onChange={(e) => setfund_details({ ...fund_details, strategy_url: e.target.value })}
                    />
                    <Errortext value={"Error text"} />
                  </div>

                </div>
              </div>

              <div className='br'>
                <br />
              </div>

              <Addteam all_details={all_details} />

              <div className='br'>
                <br />
              </div>
              <Performance />
              <Addperfomance />


            </div>

          </div>


          {/* <div>
            <Update />
            <Factsheet />
          </div> */}
        </div>

      </div>

    </>
  )
}

export default FundForm
