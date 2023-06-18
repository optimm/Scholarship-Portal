import { Component } from 'react';
import '../styles/loginPageStyles.css';
import logo from '../assets/images/logo.png';

class LoginPage extends Component {
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
          <h3 className='site-header'>LogIn</h3>
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
              name='password'
              placeholder='***************'
            ></input>
          </div>
          <button type='button' className='form__submit'>
            Log In
          </button>
        </form>
        <div className='form__forgot-password'>
          <a href='#'>Forget Password?</a>
        </div>
        {/*<div>
          <a href='#'>LogIn with Goggle</a>
          <p>Don't have an account?</p>
          <a href='#'>Create account</a>
        </div> */}
      </div>
    );
  }
}

export default LoginPage;
