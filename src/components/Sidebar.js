import React, { useEffect, useState } from 'react';
import './CSS/Sidebar.css';
import Button from './elements/Button';
import axios from 'axios';

function Sidebar({ change_to_addfund, fund_data }) {
    const [data, setData] = useState([]);
    const email = "demo2@gmail.com";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/v1/funds/fundsdetail', { email });
                console.log(response);
                setData(response.data.data);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, []);

    const get_fund_data = (item) => {
        // console.log(item);
        fund_data(item)
    }

    return (
        <>
            <div className='sidebar'>

                <div className="sidebar-menu-structure">
                    <div className='fund-data'>

                        {data.map((item, index) => (
                            <div className='sidebar-menu' key={item.id} onClick={() => get_fund_data(item)} >
                                <h4 >{item?.name}</h4>
                                <h4><span>Date created: {item?.date_time}</span></h4>
                                <div className='delete-button'>
                                    <h3>Delete</h3>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className='sidebar-button'>
                        <Button value={"Add fund"} change_to_addfund={change_to_addfund} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
