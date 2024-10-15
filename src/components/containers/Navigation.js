import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    const [activeItem, setActiveItem] = useState('funds'); // State to track active element

    const handleClick = (item) => {
        setActiveItem(item); // Set the clicked element as active
    }

    return (
        <div>
            <div className='left-component'>
                <div className='side-panel'>
                    <Link to="/" >
                        <div
                            className={`side-panel-element`}
                            onClick={() => handleClick('funds')}
                        >
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`material-symbols-outlined funds ${activeItem === 'funds' ? 'active' : ''}`}>
                                <path d="M13.7192 0.0629557C12.7145 0.0629557 11.8901 0.913579 11.8901 1.95009C11.8901 2.82288 12.4772 3.55698 13.2619 3.76881V4.67557L10.0806 11.6499L7.73799 6.00977C7.7007 5.9196 7.6371 5.84365 7.55604 5.79248C7.47499 5.74132 7.38049 5.71747 7.28569 5.72427C7.19089 5.73107 7.1005 5.76817 7.02708 5.83041C6.95366 5.89265 6.90086 5.97695 6.87602 6.07158L5.84898 9.95576L4.99387 7.8969C4.95873 7.8118 4.90011 7.73923 4.82531 7.68822C4.75051 7.63722 4.66283 7.61002 4.57317 7.61002C4.48351 7.61002 4.39583 7.63722 4.32103 7.68822C4.24623 7.73923 4.18762 7.8118 4.15248 7.8969L2.8346 11.0706L1.82951 11.7627L0.711005 10.9932C0.661045 10.9588 0.605008 10.9349 0.546094 10.9229C0.487179 10.9108 0.426542 10.9109 0.367645 10.923C0.308748 10.9351 0.252745 10.9591 0.202834 10.9936C0.152924 11.0281 0.110084 11.0723 0.0767608 11.1239C0.0434472 11.1755 0.0203091 11.2333 0.00866826 11.2941C-0.00297258 11.3549 -0.00288808 11.4175 0.00891727 11.4783C0.0207226 11.539 0.0440173 11.5968 0.0774704 11.6483C0.110923 11.6997 0.153879 11.7439 0.203884 11.7783L1.57572 12.7218C1.65086 12.7735 1.73917 12.8012 1.82951 12.8012C1.91984 12.8012 2.00815 12.7735 2.08329 12.7218L3.45513 11.7783C3.52885 11.7275 3.58668 11.6557 3.62158 11.5716L4.57317 9.28206L5.52431 11.5716C5.56156 11.6618 5.62512 11.7378 5.70614 11.789C5.78717 11.8402 5.88165 11.8641 5.97644 11.8573C6.07123 11.8506 6.16164 11.8135 6.23508 11.7513C6.30853 11.6891 6.36138 11.6049 6.38628 11.5103L7.41332 7.6261L9.64026 12.987C9.67502 13.0705 9.73244 13.1419 9.80561 13.1926C9.87879 13.2433 9.96459 13.2711 10.0527 13.2726C10.1408 13.2742 10.2275 13.2494 10.3023 13.2013C10.3771 13.1532 10.4369 13.0839 10.4743 13.0016L13.2614 6.88965V14.6882C13.2614 14.8133 13.3096 14.9333 13.3954 15.0218C13.4811 15.1103 13.5974 15.16 13.7187 15.16C13.84 15.16 13.9563 15.1103 14.0421 15.0218C14.1278 14.9333 14.176 14.8133 14.176 14.6882V6.65234L16.5168 11.1371C16.5585 11.2168 16.6215 11.2824 16.6983 11.3261C16.7752 11.3698 16.8626 11.3898 16.9501 11.3837C17.0377 11.3776 17.1216 11.3456 17.1921 11.2916C17.2625 11.2376 17.3163 11.1638 17.3472 11.0791L20.0909 3.53056C20.1334 3.4135 20.1292 3.2838 20.0791 3.16995C20.0291 3.05611 19.9372 2.96742 19.8238 2.92337C19.7755 2.90459 19.7245 2.89439 19.6729 2.89318C19.5783 2.89114 19.4854 2.91945 19.407 2.97421C19.3286 3.02896 19.2686 3.10747 19.2353 3.19889L16.8465 9.77649L14.176 4.66V3.76834C14.9602 3.55603 15.5478 2.82194 15.5478 1.94914C15.5478 0.912636 14.7234 0.0620117 13.7187 0.0620117L13.7192 0.0629557ZM13.7192 1.00652C14.2295 1.00652 14.6337 1.42358 14.6337 1.95009C14.6337 2.47659 14.2295 2.89365 13.7192 2.89365C13.2089 2.89365 12.8046 2.47659 12.8046 1.95009C12.8046 1.42358 13.2089 1.00652 13.7192 1.00652Z" fill="white" fill-opacity="0.9" />
                            </svg>

                            <h5>Funds</h5>
                        </div>
                    </Link>

                    <Link to="/requests">
                        <div
                            className={`side-panel-element`}
                            onClick={() => handleClick('manage')}
                        >
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={`material-symbols-outlined manage ${activeItem === 'manage' ? 'active' : ''}`}>
                                <path d="M6.11111 0.937012H2.77778C2.04107 0.937012 1.33453 1.22714 0.813592 1.74357C0.292658 2.26001 0 2.96044 0 3.69078C0 4.42113 0.292658 5.12156 0.813592 5.63799C1.33453 6.15443 2.04107 6.44456 2.77778 6.44456H6.11111C6.84782 6.44456 7.55436 6.15443 8.0753 5.63799C8.59623 5.12156 8.88889 4.42113 8.88889 3.69078C8.88889 2.96044 8.59623 2.26001 8.0753 1.74357C7.55436 1.22714 6.84782 0.937012 6.11111 0.937012ZM6.11111 5.34305H2.77778C2.33575 5.34305 1.91183 5.16897 1.59927 4.85911C1.28671 4.54925 1.11111 4.12899 1.11111 3.69078C1.11111 3.25258 1.28671 2.83232 1.59927 2.52246C1.91183 2.2126 2.33575 2.03852 2.77778 2.03852H6.11111C6.55314 2.03852 6.97706 2.2126 7.28962 2.52246C7.60218 2.83232 7.77778 3.25258 7.77778 3.69078C7.77778 4.12899 7.60218 4.54925 7.28962 4.85911C6.97706 5.16897 6.55314 5.34305 6.11111 5.34305ZM6.11111 8.64757H2.77778C2.04107 8.64757 1.33453 8.9377 0.813592 9.45413C0.292658 9.97057 0 10.671 0 11.4013V18.0104C0 18.7407 0.292658 19.4412 0.813592 19.9576C1.33453 20.474 2.04107 20.7642 2.77778 20.7642H6.11111C6.84782 20.7642 7.55436 20.474 8.0753 19.9576C8.59623 19.4412 8.88889 18.7407 8.88889 18.0104V11.4013C8.88889 10.671 8.59623 9.97057 8.0753 9.45413C7.55436 8.9377 6.84782 8.64757 6.11111 8.64757ZM7.77778 18.0104C7.77778 18.4486 7.60218 18.8689 7.28962 19.1787C6.97706 19.4886 6.55314 19.6627 6.11111 19.6627H2.77778C2.33575 19.6627 1.91183 19.4886 1.59927 19.1787C1.28671 18.8689 1.11111 18.4486 1.11111 18.0104V11.4013C1.11111 10.9631 1.28671 10.5429 1.59927 10.233C1.91183 9.92316 2.33575 9.74908 2.77778 9.74908H6.11111C6.55314 9.74908 6.97706 9.92316 7.28962 10.233C7.60218 10.5429 7.77778 10.9631 7.77778 11.4013V18.0104ZM17.2222 15.2566H13.8889C13.1522 15.2566 12.4456 15.5468 11.9247 16.0632C11.4038 16.5796 11.1111 17.2801 11.1111 18.0104C11.1111 18.7407 11.4038 19.4412 11.9247 19.9576C12.4456 20.474 13.1522 20.7642 13.8889 20.7642H17.2222C17.9589 20.7642 18.6655 20.474 19.1864 19.9576C19.7073 19.4412 20 18.7407 20 18.0104C20 17.2801 19.7073 16.5796 19.1864 16.0632C18.6655 15.5468 17.9589 15.2566 17.2222 15.2566ZM17.2222 19.6627H13.8889C13.4469 19.6627 13.0229 19.4886 12.7104 19.1787C12.3978 18.8689 12.2222 18.4486 12.2222 18.0104C12.2222 17.5722 12.3978 17.1519 12.7104 16.8421C13.0229 16.5322 13.4469 16.3581 13.8889 16.3581H17.2222C17.6643 16.3581 18.0882 16.5322 18.4007 16.8421C18.7133 17.1519 18.8889 17.5722 18.8889 18.0104C18.8889 18.4486 18.7133 18.8689 18.4007 19.1787C18.0882 19.4886 17.6643 19.6627 17.2222 19.6627ZM17.2222 0.937012H13.8889C13.1522 0.937012 12.4456 1.22714 11.9247 1.74357C11.4038 2.26001 11.1111 2.96044 11.1111 3.69078V10.2998C11.1111 11.0302 11.4038 11.7306 11.9247 12.247C12.4456 12.7635 13.1522 13.0536 13.8889 13.0536H17.2222C17.9589 13.0536 18.6655 12.7635 19.1864 12.247C19.7073 11.7306 20 11.0302 20 10.2998V3.69078C20 2.96044 19.7073 2.26001 19.1864 1.74357C18.6655 1.22714 17.9589 0.937012 17.2222 0.937012ZM18.8889 10.2998C18.8889 10.738 18.7133 11.1583 18.4007 11.4682C18.0882 11.778 17.6643 11.9521 17.2222 11.9521H13.8889C13.4469 11.9521 13.0229 11.778 12.7104 11.4682C12.3978 11.1583 12.2222 10.738 12.2222 10.2998V3.69078C12.2222 3.25258 12.3978 2.83232 12.7104 2.52246C13.0229 2.2126 13.4469 2.03852 13.8889 2.03852H17.2222C17.6643 2.03852 18.0882 2.2126 18.4007 2.52246C18.7133 2.83232 18.8889 3.25258 18.8889 3.69078V10.2998Z" fill="#011627" />
                            </svg>


                            <h5>Manage Requests</h5>
                        </div>
                    </Link >
                    <Link to="/account">
                        <div
                            className={`side-panel-element`}
                            onClick={() => handleClick('shopping')}
                        >
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`material-symbols-outlined shopping ${activeItem === 'shopping' ? 'active' : ''}`}>
                                <path d="M5.6667 5.0835H12.3334M5.6667 5.0835H4.47253C4.10794 5.08345 3.74775 5.16315 3.41722 5.31701C3.08668 5.47087 2.7938 5.69516 2.5591 5.97416C2.32441 6.25316 2.15357 6.58012 2.05858 6.93212C1.96358 7.28412 1.94673 7.65263 2.0092 8.01183L2.8067 12.5952C2.90756 13.1751 3.20984 13.7009 3.66031 14.0799C4.11077 14.4588 4.68052 14.6667 5.2692 14.6668H13.055C13.6621 14.6669 14.2484 14.446 14.7046 14.0455C15.1608 13.645 15.4557 13.0921 15.5342 12.4902L16.1317 7.90683C16.1777 7.55419 16.1479 7.1958 16.0444 6.85559C15.9408 6.51537 15.7659 6.20116 15.5312 5.93394C15.2966 5.66672 15.0076 5.45263 14.6837 5.30597C14.3597 5.15932 14.0082 5.08347 13.6525 5.0835H12.3334M5.6667 5.0835C5.6667 5.0835 4.83336 1.3335 9.00003 1.3335C13.1667 1.3335 12.3334 5.0835 12.3334 5.0835M5.6667 5.0835V7.16683M12.3334 5.0835V7.16683" stroke="black" stroke-width="2" stroke-linecap="round" />
                            </svg>

                            <h5>Shopping</h5>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
