import { useState } from 'react'
import { auth, provider } from '../../firebase/config';
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { FcGoogle } from "react-icons/fc"
import "./Login.css"
import png from "../../assets/images/illustration.png"
const Login = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")
  const loginUser = (e) => {
      e.preventDefault();

      auth.signInWithEmailAndPassword(email, password)
        .then(response => {
          if (response) {
            localStorage.setItem("user", response.Ib.Ib.Ib.Ib.email)
            history.push("/")

          }
        })
        .catch(err => setError(t("no such account found")))
    }
  const loginWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(response => {
        if (response) {
          localStorage.setItem("user", response.additionalUserInfo.profile.given_name)
          history.push("/")
        }
      })
      .catch(err => console.log(err.message))
  }

  
  
  return (
    <div className="body__login">
      <section class="container">
        <div class="login-container">
          <div class="circle circle-one"></div>
          
          <div class="form-container">
            <img
              src={png}
              alt="illustration"
              class="illustration"
            />
            <h1 class="opacity">{t("Log in")}</h1>
            <form onSubmit={loginUser}>
              <input className='signup__useremail' placeholder={t('Email')} type="email" required onChange={e => { setEmail(e.target.value) }} />
              <input className='signup__userpassword' placeholder={t('Password')} type="password" required minLength={8} onChange={e => { setPassword(e.target.value) }} />
              <button className='signup__btn opacity' type='submit'>{t("Log in")}</button>
            </form>
            <div class="register-forget opacity">
              <Link to="/signup">{t("register")}</Link>
              <Link onClick={loginWithGoogle}>Google <FcGoogle className='google__icon' /></Link>
              
            </div>
            <p className='errorHandler'>{error}</p>
          </div>
          <div class="circle circle-two"></div>
        </div>
        
        
      </section>
    </div>

  )

}

export default Login
