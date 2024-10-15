import React from 'react'
import "../CSS/Discrete.css"

function Discrete() {
  return (
    <div>
        <div className='monthlyreturn discrete-section'>
            <div>
                <h3>Discrete Performance</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>1 month</th>
                        <th>3 month</th>
                        <th>6 month</th>
                        <th>1 year</th>
                        <th>3 year</th>
                        <th>inception</th>
                        <th>anualized</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='lefty'>Super class a</td>
                        <td>0.25</td>
                        <td class="negative">-0.36</td>
                        <td>3.65</td>
                        <td className=''>5.45</td>
                        <td>6.33</td>
                        <td>0.33</td>
                        <td>0.63</td>
                       
                    </tr>

                    <tr>
                        <td className='lefty'>Benchmark</td>
                        <td>0.25</td>
                        <td class="negative">-0.36</td>
                        <td>3.65</td>
                        <td className=''>5.45</td>
                        <td>6.33</td>
                        <td>0.33</td>
                        <td>0.63</td>
                       
                    </tr>

                    <tr>
                        <td className='lefty'>Diffrence</td>
                        <td>0.25</td>
                        <td class="negative">-0.36</td>
                        <td>3.65</td>
                        <td className=''>5.45</td>
                        <td>6.33</td>
                        <td>0.33</td>
                        <td>0.63</td>
                       
                    </tr>

                </tbody>
            </table>

        </div>
      
    </div>
  )
}

export default Discrete
