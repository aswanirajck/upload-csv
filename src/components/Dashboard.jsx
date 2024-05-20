import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Upload from './Upload';
import DataTable from './DataTable';
import NavigationBar from './NavigationBar';

const Dashboard = () => {
  const [csvData, setCsvData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDataUpload = (data) => {
    setCsvData(data);
  };

  const handleTagSelect = (rowIndex, tag) => {
    setCsvData((prevData) => {
      const newData = [...prevData];
      if (!newData[rowIndex]['selected tags'].includes(tag)) {
        newData[rowIndex]['selected tags'].push(tag);
      }
      return newData;
    });
  };

  const handleTagRemove = (rowIndex, tag) => {
    setCsvData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex]['selected tags'] = newData[rowIndex]['selected tags'].filter((t) => t !== tag);
      return newData;
    });
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen font-nuvinto">
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} isMobile={isMobile} />
      <div className={`flex flex-col flex-1 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <NavigationBar onMenuClick={handleSidebarToggle} isOpen={isSidebarOpen} />
        <div className="flex-1 p-8 bg-gray-100">
          <Upload onDataUpload={handleDataUpload} />
          <div className="w-full mt-4">
            <DataTable
              csvData={csvData}
              handleTagSelect={handleTagSelect}
              handleTagRemove={handleTagRemove}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
