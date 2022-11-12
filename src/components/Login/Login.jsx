import React, { useEffect, useState } from 'react'
import style from './Login.module.css'

const Login = ({handleLogin}) => {
  const [countries, setCountries] = useState([])

  const getCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const json = await response.json()
    const newCountries = []

    json.forEach(country => {
      const {name, idd} = country

      const iddSuffixes = idd.suffixes ? (idd.suffixes[1] || idd.suffixes[0]) : ''

      newCountries.push({
        name: name.common,
        idd: `${idd.root}${iddSuffixes}`
      })
    })

    setCountries(newCountries)
  }

  useEffect(() => {
    getCountries() 
  }, [])
  
  return (
    <section className={style.container}>
      <header className={style.header}>
        <button onClick={handleLogin} className={style.cancelButton}>x</button>
        <h2 className={style.headerTitle}>Log in or sign up</h2>
      </header>
      <main className={style.main}>
        <h3>Welcome to Airbnb</h3>
        <form className={style.form}>
          <div className={style.inputContainer}>
            <div className={style.selectCountry}>
              <label htmlFor="country">Country/Region</label>
              <select name='country' id='country'>
                {countries.map(country => <option key={country.idd} value={country.idd}>{country.name} ({country.idd})</option>)}
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

export default Login
