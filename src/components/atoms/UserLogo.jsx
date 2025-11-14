import userImg from '../../assets/user.png';

function UserLogo() {
  return (
    <div className="user-logo-wrapper">
      <img 
        src={userImg} 
        alt="User avatar" 
        className="user-logo"
      />
      <span className="user-arrow">▼</span>
    </div>
  );
}

export default UserLogo;
