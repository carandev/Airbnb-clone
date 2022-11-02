import React, { Component } from 'react'
import style from './Login.module.css'

export default class Login extends Component {
  render() {
    return (
      <section className={style.container}>
        <header className={style.header}>
          <button onClick={this.props.handleLogin} className={style.cancelButton}>x</button>
          <h2 className={style.headerTitle}>Log in or sign up</h2>
        </header>
        <main className={style.main}>
          <h3>Welcome to Airbnb</h3>
          <form className={style.form}>
            <div className={style.inputContainer}>
              <div className={style.selectCountry}>
                <label htmlFor="country">Country/Region</label>
                <select name='country' id='country'>
                  <option value="+57" defaultChecked>Colombia(+57)</option>
                </select>
              </div> 
              <div className='inputLabel'>
                <input type="tel" placeholder='(XXX) XXX-XXXX' name="phone" id="phoneNumber"/>
                <label htmlFor="phoneNumber">Phone number</label>
              </div>
            </div>
            <small>
              We'll call or text you to confirm yout number. Standard message
              and data rates apply. <a href="#test">Privacy Policy</a>.
            </small>
            <button className={style.mainButton}>Continue</button>
          </form>
          <div className={style.divideLogin}>
            <span>or</span>
          </div>
          <div className={style.buttonsContainer}>
            <button>Continue with Facebook</button>
            <button>Continue with Google</button>
            <button>Continue with Apple</button>
            <button>Continue with email</button>
          </div>
        </main>
      </section>
    )
  }
}
