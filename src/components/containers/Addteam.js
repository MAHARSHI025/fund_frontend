import React, { useEffect, useState } from 'react'
import "../CSS/Addteam.css"
import Errortext from '../elements/Errortext.js'
import axios from 'axios'

function Addteam({ all_details }) {

    const [team_details, setteam_details] = useState({})

    useEffect(() => {
        setteam_details((prev) => ({ ...prev, fund_id: all_details[0]?.id }));

    }, [all_details])




    const add_team = async () => {
        try {

            let responce = await axios.post("http://localhost:5000/api/v1/funds/addteamdetails", team_details)
            console.log(responce);
            // console.log(team_details);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='Addteam'>
            <h3>Team</h3>
            <div className="Addteam-input-section">
                <div>
                    <h4>Please enter persons name below. </h4>
                    <input type="text" name="" id="" placeholder='Name'
                        onChange={(e) => setteam_details({ ...team_details, name: e.target.value })}
                    />
                    <Errortext value={"Error text"} />
                </div>
                <div>
                    <h4>Designation</h4>
                    <input type="text" name="" id="" placeholder='Designation'
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
                    <input type="text" name="" id="" placeholder='https://...' 
                    onChange={(e) => setteam_details({ ...team_details, linkedin_url: e.target.value })}
                    />
                </div>

                <div className='description-button-section'>
                    <button onClick={add_team}>Add team member</button>
                    <button>Delete</button>
                </div>

            </div>
        </div>
    )
}

export default Addteam
