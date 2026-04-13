// App.jsx
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FloatingNav               from './shared/components/FloatingNav'
import IntroScreen               from './shared/components/IntroScreen'
import HomePage                  from './pages/HomePage'
import AboutPage                 from './pages/AboutPage'
import SkillsPage                from './pages/SkillsPage'
import WorkingExperiencePage     from './pages/WorkingExperiencePage'
import EducationPage             from './pages/EducationPage'
import ProjectsPage              from './pages/ProjectsPage'
import ProjectDetailPage         from './pages/ProjectDetailPage'

function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <BrowserRouter>
      {!introDone && <IntroScreen onDone={() => setIntroDone(true)} />}

      <div style={{ visibility: introDone ? 'visible' : 'hidden' }}>
        <div className="noise" />
        <FloatingNav />
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/work"           element={<WorkingExperiencePage />} /> 
          <Route path="/skills"         element={<SkillsPage />} />
          <Route path="/education"      element={<EducationPage />} />
          <Route path="/projects"       element={<ProjectsPage />} />
          <Route path="/projects/:id"   element={<ProjectDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
