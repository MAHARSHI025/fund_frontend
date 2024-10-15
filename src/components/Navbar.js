import React, { useState, useEffect, useRef } from 'react';
import './CSS/Navbar.css';

function Navbar({ inner_element_preview, inner_element_edit, all_details }) {
    const [activeElement, setActiveElement] = useState('preview');
    const [displayDetail, setDisplayDetail] = useState(true);
    const [allDetails, setAllDetails] = useState([]);
    const myDivRef = useRef(null);

    useEffect(() => {
        if (all_details && all_details.length > 0) {
            setAllDetails(all_details);
        }
    }, [all_details]);

    const handleEditClick = () => {
        setActiveElement('edit');
        inner_element_edit();
        setDisplayDetail(false);
        if (myDivRef.current) {
            myDivRef.current.classList.add("new-class");
        }
    };

    const handlePreviewClick = () => {
        setActiveElement('preview');
        inner_element_preview();
        setDisplayDetail(true);
        if (myDivRef.current) {
            myDivRef.current.classList.remove("new-class");
        }
    };

    return (
        <div className='navbar' ref={myDivRef}>
            <div className='navbar-right'>
                <div className='navbar-copy-link'>
                    <h4>Copy Fund Profile Link</h4>
                    <span class="material-symbols-outlined">
                        link
                    </span>
                </div>

                <div className='change-button'>
                    <h4
                        onClick={handleEditClick}
                        className={activeElement === 'edit' ? 'active' : ''}
                    >
                        Edit
                    </h4>
                    <h4
                        onClick={handlePreviewClick}
                        className={activeElement === 'preview' ? 'active' : ''}
                    >
                        Preview
                    </h4>
                </div>
            </div>

            {displayDetail && (
                <div>
                    {allDetails?.length > 0 && (
                        <div className='display-detail'>
                            <div className="navbar-left">
                                <h3>Get in touch with the team</h3>
                                <span>Fund last viewed on 3rd July 2020</span>
                                <span>Fund last updated on {allDetails[0]?.date_updated}</span>
                            </div>
                            <div className="navbar-bottom" >
                                <h4>Firm Assets <span>{allDetails[0]?.firm_assets}</span></h4>
                                <h4>Strategy Assets <span>{allDetails[0]?.strategy_assets}</span></h4>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Navbar;
