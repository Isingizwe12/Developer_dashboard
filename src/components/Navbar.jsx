

function Navbar() {
  return (
    <div className="bg-white shadow flex justify-between py-4 px-2">
      <div>
   <h2 className="text-gray-800 font-bold text-2xl">Developer Dashboard</h2>
      </div>
      <div>
  <button className="bg-blue-400 px-4 py-2 rounded text-white font-semibold cursor-pointer hover:bg-blue-600">Dark/Light</button>
      </div>
    </div>
  )
}

export default Navbar
