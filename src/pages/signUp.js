import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/signUp.module.scss';

const SignUp = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [countryCode, setCountryCode] = useState('+1');

  const handleSignUp = () => {
    console.log('Sign-up data:', {
      fullName,
      phoneNumber: countryCode + phoneNumber,
      email,
      gender,
    });
    router.push('/payment');
  };

  const handleBack = () => {
    router.push('/profile');
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.backArrow} onClick={handleBack}>
        <span>&#9664;</span> Back
      </div>
      <h1>Sign up with your email or phone number</h1>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className={styles.genderSelect}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div className={styles.termsWrapper}>
          <img src="/images/info.png" alt="Info" className={styles.infoIcon} />
          <span>
            By signing up, you agree to the
            <span className={styles.termsLink}> Terms of Service </span>
            and
            <span className={styles.termsLink}> Privacy Policy</span>.
          </span>
        </div>
      </div>
      <button className={styles.signupButton} onClick={handleSignUp}>
        Sign Up
      </button>
      <div className={styles.socialButtons}>
        <div className={styles.separator}>
          <hr />
          <span className={styles.separatorText}>or</span>
          <hr />
        </div>
        <button className={styles.socialButton}>
            <img src="/images/gmail.png" alt="Google" className={styles.icon} />
          Sign up with Gmail
        </button>
        <button className={styles.socialButton}>
          <div className={styles.iconWrapper}>
            <img src="/images/f.png" alt="Facebook" className={styles.icon} />
          </div>
          Sign up with Facebook
        </button>
        <button className={styles.socialButton}>
          <div className={styles.iconWrapperA}>
            <img src="/images/apple.png" alt="Apple" className={styles.icon} />
          </div>
          Sign up with Apple
        </button>
        <div className={styles.termsWrapper}>
          <span>
          Already have an account?
            <span className={styles.termsLink}> Sign in </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
