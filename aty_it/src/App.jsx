import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import KpiDetails from './pages/KpiDetails';
import UserAccount from './pages/UserAccount';
import IssueLog from './pages/IssueLog';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar isOpen={sidebarOpen} />
        <main
          className={`pt-16 transition-all duration-300 ${
            sidebarOpen ? 'lg:ml-64' : 'ml-0 lg:ml-64'
          }`}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/kpi-details" replace />} />
            <Route path="/kpi-details" element={<KpiDetails />} />
            <Route path="/user-account" element={<UserAccount />} />
            <Route path="/issue-log" element={<IssueLog />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
