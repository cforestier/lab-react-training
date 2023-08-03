import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import { isValidElement, useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('select');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState(undefined);
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [isMailValid, setIsMailValid] = useState(false);
  const isNationalityValid = nationality !== 'select';
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  const isFormValid = isMailValid && isNationalityValid && isPasswordValid;
  const handleEmail = (e) => {
    setIsMailValid(emailPattern.test(e.target.value));
    setEmail(e.target.value);
  };
  const handlePsw = (e) => setPassword(e.target.value);
  const handleNationality = (e) => setNationality(e.target.value);
  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    handleSubmit();
  };
  const handleSubmit = (e) => {
    if (isFormValid) {
      const newUser = { email, psw: password, nationality };
      setUser(newUser);
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
          style={{ border: `${isMailValid ? 'green' : 'red'} solid 2px` }}
        />
        {!isMailValid && isSubmitted && (
          <span>
            Error on mail, must contain "@" and "." followed by 2 letters
            minimum
          </span>
        )}
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          value={password}
          onChange={handlePsw}
          style={
            isSubmitted
              ? { border: `${isPasswordValid ? 'green' : 'red'} solid 2px` }
              : undefined
          }
          required
        />
        {!isPasswordValid && isSubmitted && (
          <span>
            Password must contain one digit from 1 to 9, one lowercase letter,
            one uppercase letter, one special character, no space, and it must
            be 8-16 characters long.
          </span>
        )}

        <label>Nationality</label>
        <select
          name="nationality"
          value={nationality}
          onChange={handleNationality}
          style={
            isSubmitted && !isNationalityValid
              ? { border: 'red solid 1px' }
              : undefined
          }
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
      {user && (
        <div>
          <hr />
          <p>
            {nationality === 'german'
              ? 'Hallo!'
              : nationality === 'french'
              ? 'Bonjour!'
              : 'Hello!'}
          </p>
          <p>your Email is : {user.email}</p>
          <p>your email address is correct</p>
        </div>
      )}
    </div>
  );
}

export default SignupPage;
