import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import { isValidElement, useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');
  const [nationality, setNationality] = useState('select');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [isValid, setIsValid] = useState(false);
  const handleEmail = (e) => {
    setIsValid(emailPattern.test(e.target.value));
    setEmail(e.target.value);
  };
  const handlePsw = (e) => setPsw(e.target.value);
  const handleNationality = (e) => setNationality(e.target.value);
  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    handleSubmit();
  };
  const handleSubmit = (e) => {
    if (isValid) {
      const newUser = { email, psw, nationality };
    } else {
    }
  };
  return (
    <div>
      <form style={{ border: '1px solid #ccc' }} onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label>
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={handleEmail}
          pattern={emailPattern}
          required
        />
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          value={psw}
          onChange={handlePsw}
          required
        />

        <label>Nationality</label>
        <select
          name="nationality"
          value={nationality}
          onChange={handleNationality}
        >
          <option value="select" disabled>
            Select
          </option>
          <option value="german">German</option>
          <option value="french">French</option>
          <option value="english">English</option>
        </select>
        <div>
          <Button type="primary" onClick={handleButtonClick}>
            Sign Up
          </Button>
        </div>
      </form>
      {isSubmitted && isValid && (
        <div>
          <hr />
          <p>
            {nationality === 'german'
              ? 'Hallo!'
              : nationality === 'french'
              ? 'Bonjour'
              : 'Hello'}
          </p>
          <p>your Email is : {email}</p>
          <p>your email address is correct</p>
        </div>
      )}
    </div>
  );
}

export default SignupPage;
