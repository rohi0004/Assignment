import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Profile.module.scss'; 

const Profile = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); 

  const handleSave = () => {
    console.log('Profile data saved:', {
      fullName,
      phoneNumber: countryCode + phoneNumber, 
      email,
      streetAddress,
      city,
      district,
    });

    router.push('/signUp');
  };

  const handleBack = () => {
    router.replace('/Home');
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.backArrow} onClick={handleBack}>
        <span>&#9664;</span> Back
      </div>
      <h1>Profile</h1>
      <div className={styles.profilePicture}>
        <span className={styles.cameraIcon}>📷</span>
      </div>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className={styles.inputField}
      />
      <div className={styles.phoneInputContainer}>
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className={styles.countryCodeSelect}
        >
          <option value="+1">+1 (USA)</option>
          <option value="+91">+91 (India)</option>
        </select>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={styles.inputField}
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.inputField}
      />
      <input
        type="text"
        placeholder="Street Address"
        value={streetAddress}
        onChange={(e) => setStreetAddress(e.target.value)}
        className={styles.inputField}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={styles.inputField}
      />
      <select
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
        className={styles.selectField}
      >
        <option value="">Select District</option>
      </select>
      <div className={styles.buttons}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.saveButton} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
