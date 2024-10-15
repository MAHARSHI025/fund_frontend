import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios'; // for sending API requests
import "../CSS/Addperfomance.css";
import "../CSS/Performance.css"


function Addperformance() {
    const [data, setData] = useState([]);
    const [uploadSuccess, setUploadSuccess] = useState(null);
    const [classname, setclassname] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = e.target.result;
            try {
                const workbook = XLSX.read(data, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const parsedData = XLSX.utils.sheet_to_json(sheet);
                setData(parsedData);
                console.log(parsedData);
                
                if (parsedData.length > 0) {
                    console.log(Object.keys(parsedData[0])[0]);
                    setclassname(Object.keys(parsedData[0])[0])
                } else {
                    console.log("No data found.");
                }
            } catch (error) {
                console.error('Error parsing Excel file:', error);
                setData("error");
            }
        };

        reader.onerror = (error) => {
            console.error('Error reading file:', error);
            setData("error");
        };

        if (file) {
            reader.readAsBinaryString(file);
        }
    };

    const handleUploadToServer = () => {
        if (data.length === 0) {
            alert('No data to upload!');
            return;
        }

        // Send the Excel data to your backend via POST request
        axios.post('http://localhost:5000/api/v1/funds/addperfomance', data)
            .then(response => {
                console.log('Data uploaded successfully:', response.data);
                setUploadSuccess(true);
            })
            .catch(error => {
                console.error('Error uploading data:', error);
                setUploadSuccess(false);
            });
    };

    return (
        <div className='add-perfomance-structure'>

            <div className='add-perfomance'>
                <h4>Perfomance</h4>
                <div>
                    <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
                </div>
                <button onClick={handleUploadToServer}>Upload to Server</button>
            </div>

            {uploadSuccess === true && <p>Data uploaded successfully!</p>}
            {uploadSuccess === false && <p>Error uploading data. Please try again.</p>}

            {data === "error" ? (
                <p>Error reading file. Please try again.</p>
            ) : data.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, i) => (
                                    <td key={i}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available. Please upload an Excel file.</p>
            )}
        </div>
    );
}

export default Addperformance;
