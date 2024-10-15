import React from 'react'
import "../CSS/Shareclass.css"

function Shareclass() {
    return (
        <div>

            <div className='share-class'>
                <div>
                    <h3>Share Classes</h3>
                    <h4>Administrator - Northern Trust</h4>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Share class</th>
                            <th>ISIN</th>
                            <th>Curr</th>
                            <th className='main'>Min.inv</th>
                            <th>Lock-up</th>
                            <th>Hedged</th>
                            <th>AMC</th>
                            <th className='main'>OCF</th>
                            <th>TER</th>
                            <th>Settelment</th>
                            <th>Dealing Feq</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Institutional Class A</td>
                            <td>INE000125HUS</td>
                            <td>USD</td>
                            <td>10,000,000</td>
                            <td>4 weeks </td>
                            <td>no</td>
                            <td>1.95</td>
                            <td>0.65</td>
                            <td>2.25</td>
                            <td>t+3</td>
                            <td>weekly</td>
                        </tr>
                        <tr>
                            <td>Institutional Class A</td>
                            <td>INE000125HUS</td>
                            <td>USD</td>
                            <td>10,000,000</td>
                            <td>4 weeks </td>
                            <td>no</td>
                            <td>1.95</td>
                            <td>0.65</td>
                            <td>2.25</td>
                            <td>t+3</td>
                            <td>weekly</td>
                        </tr>
                        <tr>
                            <td>Institutional Class A</td>
                            <td>INE000125HUS</td>
                            <td>USD</td>
                            <td>10,000,000</td>
                            <td>4 weeks </td>
                            <td>no</td>
                            <td>1.95</td>
                            <td>0.65</td>
                            <td>2.25</td>
                            <td>t+3</td>
                            <td>weekly</td>
                        </tr>


                    </tbody>
                </table>

                <div className='prospectus-section'>
                    <h5>Prospectus</h5>
                    <span class="material-symbols-outlined">
                        download
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Shareclass
