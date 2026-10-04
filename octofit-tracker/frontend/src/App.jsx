import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import octofitLogo from '../../../docs/octofitapp-small.png'

function Dashboard() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <img
            src={octofitLogo}
            alt="OctoFit Tracker"
            className="mb-4"
            width="120"
          />
          <h1 className="display-5 fw-bold">Move together. Go further.</h1>
          <p className="lead text-secondary mt-3">
            Track activities, connect with your team, and build healthy habits.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <Link className="btn btn-primary btn-lg" to="/activities">
              Log an activity
            </Link>
            <Link className="btn btn-outline-primary btn-lg" to="/teams">
              Explore teams
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

function ComingSoon({ name }) {
  return (
    <main className="container py-5">
      <h1>{name}</h1>
      <p className="text-secondary">Your OctoFit Tracker {name.toLowerCase()} will appear here.</p>
      <Link to="/">Back to dashboard</Link>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand bg-white border-bottom">
        <div className="container">
          <Link className="navbar-brand fw-semibold" to="/">
            OctoFit Tracker
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/activities">Activities</Link>
            <Link className="nav-link" to="/teams">Teams</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activities" element={<ComingSoon name="Activities" />} />
        <Route path="/teams" element={<ComingSoon name="Teams" />} />
        <Route path="*" element={<ComingSoon name="Page not found" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
