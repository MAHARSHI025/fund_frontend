import React, { useState } from 'react'
import "../CSS/Performance.css"

function Performance() {


    const [performanceData, setPerformanceData] = useState([
        {
            year: 2010,
            months: {
                Jan: 0.25,
                Feb: -0.36,
                Mar: 3.65,
                Apr: 26.35,
                May: 26.35,
                Jun: 26.35,
                July: 26.35,
                Aug: 26.35,
                Sep: 26.35,
                Oct: 26.35,
                Nov: 26.35,
                Dec: 26.35,
            }
        }
    ]);

    const addPreviousYear = () => {
        const newYear = {
          year: performanceData[0].year - 1,  
          months: {
            Jan: 0.25,
            Feb: -0.36,
            Mar: 3.65,
            Apr: 26.35,
            May: 26.35,
            Jun: 26.35,
            July: 26.35,
            Aug: 26.35,
            Sep: 26.35,
            Oct: 26.35,
            Nov: 26.35,
            Dec: 26.35,
        }
        };
        
        setPerformanceData([newYear, ...performanceData]); 
      };

    return (
        <div>
            <div className='monthlyreturn performance-table'>
                <div>
                    <h3>Performance</h3>
                    <span onClick={addPreviousYear}>Add previous years row</span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Jan</th>
                            <th>Feb</th>
                            <th>Mar</th>
                            <th>Apr</th>
                            <th>May</th>
                            <th>Jun</th>
                            <th>July</th>
                            <th>Aug</th>
                            <th>Sep</th>
                            <th>Oct</th>
                            <th>Nov</th>
                            <th>Dec</th>
                        </tr>
                    </thead>
                    <tbody>
                        {performanceData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.year}</td>
                                <td>{data.months.Jan}</td>
                                <td class="negative">{data.months.Feb}</td>
                                <td>{data.months.Mar}</td>
                                <td>{data.months.Apr}</td>
                                <td>{data.months.May}</td>
                                <td>{data.months.Jun}</td>
                                <td class="negative">{data.months.July}</td>
                                <td>{data.months.Aug}</td>
                                <td>{data.months.Sep}</td>
                                <td>{data.months.Oct}</td>
                                <td class="negative">{data.months.Nov}</td>
                                <td>{data.months.Dec}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>2010</td>
                            <td>0.25</td>
                            <td class="negative">-0.36</td>
                            <td>3.65</td>
                            <td>0.33</td>
                            <td>0.63</td>
                            <td>11.56</td>
                            <td class="negative">-2.56</td>
                            <td>3.65</td>
                            <td>5.33</td>
                            <td>0.35</td>
                            <td class="negative">-8.55</td>
                            <td>26.35</td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Performance
