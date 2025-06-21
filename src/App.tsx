import { useContext } from 'react'
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
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
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
      <AppContent />
    </ThemeProvider>
  )
}

export default App
