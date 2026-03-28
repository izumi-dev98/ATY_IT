import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import KpiDetails from './pages/KpiDetails';
import EmrUserAccount from './pages/EmrUserAccount';
import IssueLog from './pages/IssueLog';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sidebarCollapsed') === 'true';
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', sidebarCollapsed.toString());
  }, [sidebarCollapsed]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar
          isOpen={sidebarOpen}
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <main
          className={`pt-16 transition-all duration-300 ${
            sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'
          }`}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/kpi-details" replace />} />
            <Route path="/kpi-details" element={<KpiDetails />} />
            <Route path="/emr-user-account" element={<EmrUserAccount />} />
            <Route path="/issue-log" element={<IssueLog />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
