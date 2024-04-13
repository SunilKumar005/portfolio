import React from 'react';
import photoUrl from './images/profile_photo.jpg';
import "./css/styles.scss";
const Header = ({ name }) => {
  return (
    <header style={styles.header}>
      <img src={photoUrl} alt="Profile" style={styles.profilePhoto} />
      <h1 style={styles.name}>{name}</h1>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'left',
    padding: '10px',
    position: 'fixed',
    left: '100px',
    zIndex: 9999, 
  },
   profilePhoto: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    margin: '40px 0px',
  },
  name: {
    margin: 0,
  },
};
if (window.matchMedia("(max-width: 768px)").matches) {
  styles.profilePhoto.width = '30px';
  styles.profilePhoto.height = '30px';
  styles.name.fontSize = '16px';
}
export default Header;
