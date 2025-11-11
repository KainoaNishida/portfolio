import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Intro from "./assets/pages/load/Intro.jsx";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext.tsx";

function AppContent() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('AppContent must be used within a ThemeProvider');
  }
  
  const { theme } = context;
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-slate-1000 transition-colors duration-300">
        <main>
          <Intro />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
