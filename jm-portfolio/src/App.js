import React from 'react';
import './App.css';
import Header from './components/Header.component';
import ProjectsContainer from './components/ProjectsContainer.component';
import Footer from './components/Footer.component';
const projectUrls = ["hello", "this", "is a", "project!"]

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectsContainer projectUrls={projectUrls} />
      <Footer />
    </div>
  );
}

export default App;
