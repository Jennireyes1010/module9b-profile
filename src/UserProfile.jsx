
const UserProfile = () => {
  
  const name = "Jennifer Reyes";
  const bio = "Aspiring computer buisness major with a passion for tech and creativity";

  
  const containerStyle = {
    width: "300px",
    padding: "20px",
    margin: "20px auto",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
    borderRadius: "40px",
    fontFamily: "hanken-grotesk,",
    backgroundColor: "#ff91a3",
  };

  const imageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "4px solid #7e7e7e",
  };

  const nameStyle = {
    fontSize: "1.5rem",
    margin: "10px 0",
  };

  const bioStyle = {
    fontSize: "1rem",
    color: "#f3f3f3",
  };

  return (
    <><div style={containerStyle}>
      <img
        style={imageStyle}
        src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/512px/1f469-1f3fd.png"
        alt="Profile" />
      <h1 style={nameStyle}>{name}</h1>
      <p style={bioStyle}>{bio}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}>
        </div>
        </>
      );
    };
    
    export default UserProfile;
