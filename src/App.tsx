import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { LoadingSpinner } from './components/shared/LoadingSpinner';
import './styles/theme.css';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const QuotePage = React.lazy(() => import('./pages/QuotePage'));
const TrackingPage = React.lazy(() => import('./pages/TrackingPage'));
const AnalyticsPage = React.lazy(() => import('./pages/AnalyticsPage'));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen tech-bg text-white">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/track" element={<TrackingPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;