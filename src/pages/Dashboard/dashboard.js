import React from 'react';
import './Dashboard.css';
import userPhoto from '../../assets/photo.jpg'; // Update with actual photo path
function Dashboard() {
  // Sample user data - replace with your actual data
  const user = {
    name: "Md Abdullah Al Mahmud Pias",
    id: "ID- 2012434042",
    email: "abdullah.pias@northsouth.edu",
    degree: "B.S. in Computer Science Engineering",
    semester: "Spring 2020",
    cgpa: "3.03",
    credits: "133",
    photo:  userPhoto, // Update with actual photo path
  };

  return (
    <div className="dashboard-container">
      {/* Welcome Header */}
      <div className="welcome-header animate-fade-in">
        <h1>Welcome, <span className="highlight-text">{user.name}</span>!</h1>
        <p className="welcome-subtext">Here's your academic overview</p>
      </div>

      {/* User Profile Card */}
      <div className="profile-card animate-slide-up">
        <div className="profile-header">
          <img 
            src={user.photo} 
            alt={user.name} 
            className="profile-photo"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = 'https://via.placeholder.com/150'
            }}
          />
          <div className="profile-titles">
            <h2>{user.name}</h2>
            <p className="student-id">{user.id}</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-label">Email</span>
            <span className="detail-value">{user.email}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Degree</span>
            <span className="detail-value">{user.degree}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Entry Semester</span>
            <span className="detail-value">{user.semester}</span>
          </div>
          
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">{user.cgpa}</div>
              <div className="metric-label">Current CGPA</div>
              <div className="metric-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${(parseFloat(user.cgpa)/4)*100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">{user.credits}</div>
              <div className="metric-label">Completed Credits</div>
              <div className="metric-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${(parseInt(user.credits)/120)*100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;