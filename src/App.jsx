import './App.css';
import GitHubCard from './components/GithubCard';
import Navbar from './components/Navbar';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6 p-6 items-center justify-center flex-wrap">
        <WeatherCard />
        <GitHubCard />
      </div>
    </div>
  );
}

export default App;
