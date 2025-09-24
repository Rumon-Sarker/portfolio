
import './App.css'
import { DarkModeProvider } from './context/DarkModeContext'
import Home from './pages/Home/Home'
import Footer from './Shared/Footer'
import Header from './Shared/Header'

function App() {


  return (
    <div className='bg-white dark:bg-darkbg'>
      <DarkModeProvider>
        <Header />
        <Home />
        <Footer />
      </DarkModeProvider>
    </div>
  )
}

export default App

