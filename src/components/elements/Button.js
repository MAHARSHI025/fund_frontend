import React from 'react'

function Button({value, change_to_addfund}) {
    return (
        <div>
            <button className='button-element' id='button_element' onClick={change_to_addfund}>{value}</button>
        </div>
    )
}

export default Button
