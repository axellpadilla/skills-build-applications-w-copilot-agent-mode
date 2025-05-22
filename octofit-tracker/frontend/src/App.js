


import Users from './Users';
import Teams from './Teams';
import Activities from './Activities';
import Leaderboard from './Leaderboard';
import Workouts from './Workouts';

function App() {
  return (
    <div className="App bg-light min-vh-100">
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
            <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo me-2" />
            OctoFit Tracker
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#users">Users</a></li>
              <li className="nav-item"><a className="nav-link" href="#teams">Teams</a></li>
              <li className="nav-item"><a className="nav-link" href="#activities">Activities</a></li>
              <li className="nav-item"><a className="nav-link" href="#leaderboard">Leaderboard</a></li>
              <li className="nav-item"><a className="nav-link" href="#workouts">Workouts</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Bootstrap Card for Welcome */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow mb-4">
              <div className="card-body">
                <h1 className="card-title display-4 text-primary mb-3">Welcome to OctoFit Tracker</h1>
                <p className="card-text lead">Track your fitness, join teams, and compete on the leaderboard. Powered by Mergington High School.</p>
                <a href="#leaderboard" className="btn btn-primary btn-lg mt-3">View Leaderboard</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Section Anchors for Navigation */}
      <div id="users"><Users /></div>
      <div id="teams"><Teams /></div>
      <div id="activities"><Activities /></div>
      <div id="leaderboard"><Leaderboard /></div>
      <div id="workouts"><Workouts /></div>

      {/* Example Bootstrap Modal Trigger */}
      <div className="container mb-5">
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Open Info Modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">About OctoFit</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                OctoFit helps you stay active and healthy. Join a team, log your activities, and climb the leaderboard!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Bootstrap Form */}
      <div className="container mb-5">
        <h2 className="mb-3 text-dark">Quick Activity Log</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="activityType" className="form-label">Activity Type</label>
            <input type="text" className="form-control" id="activityType" placeholder="e.g. Run, Pushups" />
          </div>
          <div className="col-md-6">
            <label htmlFor="duration" className="form-label">Duration (minutes)</label>
            <input type="number" className="form-control" id="duration" placeholder="30" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Log Activity</button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
