'use client'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BubbleComp from './bubbleComp';


function Header() {
  return (
    <header>
      <h1>Al Gore Rythms</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sorting</Link>
        <Link to="/movies">Searching</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer> 
      <p> Created with ♡ by Disco </p>
    </footer>
  )
}

export default function App() {
  return(
    <Router>
      <Header /> 
        <Routes> 
          <Route path='/' element={<BubbleComp />} /> 
        </Routes>
      <Footer /> 
    </Router>
  )
}