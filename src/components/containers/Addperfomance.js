import React, { useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import "../CSS/Addperfomance.css";
import "../CSS/Performance.css";
import Button from '../elements/Button';
import SwiftModal from './SwiftModal';

function Addperformance() {
    const [data, setData] = useState([]);
    const [uploadSuccess, setUploadSuccess] = useState(null);
    const [classname, setClassname] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    // Create a ref for the file input
    const fileInputRef = useRef(null);

    const handleFileUpload = (file) => {
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
                    setClassname(Object.keys(parsedData[0])[0]);
                } else {
                    setErrorMessage("No data found.");
                }
            } catch (error) {
                console.error('Error parsing Excel file:', error);
                setErrorMessage("Error parsing Excel file. Please ensure it's formatted correctly.");
                setData([]);
            }
        };

        reader.onerror = (error) => {
            console.error('Error reading file:', error);
            setErrorMessage("Error reading file. Please try again.");
            setData([]);
        };

        if (file) {
            reader.readAsBinaryString(file);
        }
    };

    const handleUploadToServer = (event) => {
        const file = event.target.files[0];
        if (!file) {
            alert('No file selected!');
            return;
        }

        // Reset previous state
        setData([]);
        setUploadSuccess(null);
        setErrorMessage("");

        handleFileUpload(file);

        // Delay the server upload until file is processed
        setTimeout(() => {

            // Send the Excel data to your backend via POST request
            axios.post('http://localhost:5000/api/v1/funds/addperfomance', data)
                .then(response => {
                    console.log('Data uploaded successfully:', response.data);
                    setUploadSuccess(true);
                })
                .catch(error => {
                    console.error('Error uploading data:', error);
                    setUploadSuccess(false);
                    setErrorMessage("Error uploading data. Please try again.");
                });
        }, 1000); // Adjust delay as necessary to allow for data parsing
    };

    const handleButtonClick = () => {
        // Trigger the file input click
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className='add-perfomance-structure'>
            <div className='add-perfomance'>
                <div className='inner-add-perfomance'>
                    <h4>Performance</h4>
                    <div>
                        <Button value={"Download"} />

                        {/* Custom File Upload Button for Excel files */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div onClick={handleButtonClick} className="custom-file-upload">
                                <i className="fa fa-cloud-upload" />
                                <Button value={"Upload"} />
                            </div>
                            <input
                                ref={fileInputRef}
                                id="file-upload"
                                type="file"
                                accept=".xlsx, .xls"
                                onChange={handleUploadToServer}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>
                </div>

                {uploadSuccess === true && <p>Data uploaded successfully!</p>}
                {uploadSuccess === false && <p>Error uploading data. Please try again.</p>}
                {errorMessage && <p>{errorMessage}</p>}

                {data.length > 0 ? (
                    <SwiftModal children={<table>
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
                    </table>}></SwiftModal>

                ) : (
                    <p>No data available. Please upload an Excel file.</p>
                )}
            </div>
        </div>
    );
}

export default Addperformance;
