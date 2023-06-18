import { Component } from 'react';
import logo from '../assets/images/logo.png';
import '../styles/loginPageStyles.css';

class SignUpPage extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='main-container'>
        <div className='main-header'>
          <img className='main-header__logo' src={logo}></img>
          <h1 className='main-header__heading'>ScholarEase</h1>
        </div>
        <header>
          <h3 className='site-header'>Sign Up</h3>
        </header>
        <form className='form'>
          <div className='form__group'>
            <label className='form__label'>Email or Phone Number</label>
            <input
              className='form__input'
              type='text'
              name='username'
              placeholder='name@gmail.com or +91 xxxxx xxxxx'
            />
          </div>
          <div className='form__group'>
            <label className='form__label'>Password</label>
            <input
              className='form__input'
              type='password'
              name='signup_password'
              placeholder='***************'
            ></input>
          </div>
          <div className='form__group'>
            <label className='form__label'>Confirm Password</label>
            <input
              className='form__input'
              type='password'
              name='confirm_password'
              placeholder='***************'
            ></input>
          </div>
          <button type='button' className='form__submit'>
            Sign Up
          </button>
        </form>
        {/* <div>
          <a href='#'>Sign Up with Goggle</a>
          <p>Already have an account?</p>
          <a href='#'>Log In</a>
        </div> */}
      </div>
    );
  }
}

export default SignUpPage;
