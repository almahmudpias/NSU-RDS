import react from "react";
function passwordbox() {
  return (
    <div className="password-container">
      <div className="password-box">
        <h1>RDS</h1>
        <h2>NSU Portal : Password Reset</h2>
        <form>
          <div className="input-group">
            <label>New Password</label>
            <input type="password" placeholder="Please enter your new password" required />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Please confirm your new password" required />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
}