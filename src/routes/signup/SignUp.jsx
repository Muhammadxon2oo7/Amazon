import {useState} from 'react';
import { auth } from '../../firebase/config';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./SignUp.css"
import { Link } from 'react-router-dom';
import png from "../../assets/images/illustration.png"
const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [possibleError, setPossibleError] = useState("");

  const createUser = (e) => {
    
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(email, password)
      .then(response => {

        if(response){
          history.push("/login");
        }
      })
      .catch(err => {
        setPossibleError(err.message);
      })
  } 

  const { t } = useTranslation();



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
            <h1 class="opacity">{t("Create  account")}</h1>
            <form onSubmit={createUser}>
              <input className='signup__useremail' placeholder={t('Email')} type="email" required onChange={e => {setEmail(e.target.value)}} />
              <input className='signup__userpassword' placeholder={t('Password')} type="password" required minLength={8} onChange={e => {setPassword(e.target.value)}} />
              <button className='signup__btn opacity' type='submit'>{t("Create  account")}</button>
            </form>
            <div class="register-forget opacity">
              <Link to="/login">{t("Log in")}</Link>
            </div>
          </div>
          <div class="circle circle-two"></div>
        </div>
        <div class="theme-btn-container">
        </div>
        
      </section>
    </div>

  )
  
  
  
}

export default SignUp