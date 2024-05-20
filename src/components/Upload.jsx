import React, { useState, useRef } from 'react';
import { parse } from 'csv-parse/browser/esm';
import { ReactComponent as UploadButton } from '../assets/icons/uploadButton.svg';
import { ReactComponent as ExcelIcon } from '../assets/icons/excelIcon.svg';

const Upload = ({ onDataUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setErrorMsg('');
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = handleFileRead;
      reader.readAsText(selectedFile);
      setLoading(true);
    } else {
      setErrorMsg('Please select a file first.');
    }
  };

  const handleFileRead = (e) => {
    const content = e.target.result;
    parse(content, {
      columns: true,
      skip_empty_lines: true,
    }, (err, output) => {
      setLoading(false);
      if (err) {
        setErrorMsg('Error parsing CSV file.');
        console.error(err);
      } else {
        const enhancedOutput = output.map((row) => ({
          ...row,
          'selected tags': [],
        }));
        setData(enhancedOutput);
        onDataUpload(enhancedOutput);
        setErrorMsg('');
      }
    });
  };

  const handleRemoveClick = () => {
    setSelectedFile(null);
    setData([]);
    onDataUpload([]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      setErrorMsg('');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 font-figtree">
      <h1 className="text-2xl font-bold mt-4 ml-4 sm:mt-0 sm:ml-0 sm:hidden">Upload CSV</h1>
      <div className="max-w-2xl w-full bg-white p-8 rounded shadow-md justify-center">
        <div
          className="flex flex-col items-center justify-center border-2 border-dotted border-gray-300 p-12 rounded mb-4 cursor-pointer"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        //onClick={() => fileInputRef.current.click()}
        >
          <ExcelIcon />
          {selectedFile ? (
            <div className="flex items-center">
              <span className="mr-2">{selectedFile.name}</span>
              <button
                onClick={handleRemoveClick}
                className="text-red-500 hover:text-red-600 focus:outline-none"
              >
                Remove
              </button>
            </div>
          ) : (
            <p className="text-gray-500">
              Drop your excel sheet here or{' '}
              <span
                className="text-blue-500 underline"
                onClick={() => fileInputRef.current.click()}
              >
                browse
              </span>
            </p>
          )}
        </div>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
        {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
        <div className="flex justify-center items-center">
          <button
            onClick={handleUploadClick}
            className="flex items-center justify-center bg-[#605BFF] text-white p-2 rounded shadow-sm focus:outline-none hover:bg-[#5045d8] disabled:bg-gray-400 w-full"
            disabled={loading || !selectedFile}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l-3 3 3 3-3 3V12z"
                ></path>
              </svg>
            ) : (
              <>
                <UploadButton />
                Upload
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
