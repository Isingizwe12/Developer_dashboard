
import './App.css'
import GitHubCard from './components/GithubCard'
import Navbar from './components/Navbar'
import WeatherCard from './components/WeatherCard'
function App() {

  return (
    <>
     <Navbar/>
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-screen items-center justify-center">
    
     <WeatherCard/>
     <GitHubCard/>
    </div>
    </>
  )
}

export default App
