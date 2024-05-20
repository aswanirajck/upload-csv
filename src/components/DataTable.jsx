import React, { useState } from 'react';
import { ReactComponent as CloseTag } from '../assets/icons/close-tag.svg';

const DataTable = ({ csvData, handleTagSelect, handleTagRemove }) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(csvData.length).fill(''));

  const handleSelectChange = (rowIndex, value) => {
    handleTagSelect(rowIndex, value);
    setSelectedOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[rowIndex] = value; // Keep the selected value
      return newOptions;
    });
  };

  const formatId = (id) => {
    return id.toString().padStart(2, '0');
  };

  const toCamelCase = (str) => {
    return str
      .toUpperCase();
    //.replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
  };

  return (
    <>
      {

        csvData.length > 0 && (
          <>
            <div className="text-32">Uploads</div>
            <div className="overflow-x-auto w-full p-4 bg-white rounded shadow-md">
              <table className="table-auto w-full md:table-fixed">
                <thead>
                  <tr>
                    {Object.keys(csvData[0]).map((key, index) => (
                      <th key={index} className="border px-4 py-2">{toCamelCase(key)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {Object.entries(row).map(([key, value], index) => (
                        <td key={index} className="border px-4 py-2">
                          {key === 'links' ? (
                            <a href={`http://${value}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                              {value}
                            </a>
                          ) : key === 'select tags' ? (
                            <select
                              className="border rounded p-1"
                              onChange={(e) => handleSelectChange(rowIndex, e.target.value)}
                              value={selectedOptions[rowIndex] || ''}
                            >
                              <option className="text-blue" value="" disabled>Select tags</option>
                              {value.split(',').map((tag, i) => (
                                <option key={i} value={tag.trim()}>{tag.trim()}</option>
                              ))}
                            </select>
                          ) : key === 'selected tags' ? (
                            <div className="flex flex-wrap gap-2">
                              {value.map((tag, i) => (
                                <span key={i} className="flex items-center bg-[#605BFF] p-1 rounded text-white">
                                  {tag}
                                  <button
                                    className="ml-2 text-red-500"
                                    onClick={() => handleTagRemove(rowIndex, tag)}
                                  >
                                    <CloseTag />
                                  </button>
                                </span>
                              ))}
                            </div>
                          ) : key === 'id' ? (
                            formatId(value)
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
    </>
  );
};

export default DataTable;
