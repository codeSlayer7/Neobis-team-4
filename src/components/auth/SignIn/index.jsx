/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import s from "./index.module.css";
import Photo_login from "../../../images/photoLogin.png";
import Logo from "../../../images/logo.svg";
import Cross from "../../../images/cross.svg";
import { Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import jwt_decode from 'jwt-decode'
import {useDispatch, useSelector} from 'react-redux'
import { setUser } from "../../../store/googleSlice";

const google = window.google;

const Login = () => {

  const googleUser = useSelector(state=> state.google.user)
  const dispatch = useDispatch()
  

  function handleCallBackResponse (response){
    console.log("encoded jwt" + response.credential);
    let userObject = jwt_decode(response.credential);
     dispatch(setUser(userObject))   
  }
  
//  получаю токен и декодирую его что бы передать в стейт где я хотел прописать роут в в профиль.

useEffect(()=>{
  google.accounts.id.initialize({
    client_id:"643605290055-611tc3q1htbm23c2a6267goc85r3t8nm.apps.googleusercontent.com",
    callback: handleCallBackResponse,
  })
  google.accounts.id.renderButton(
    document.getElementById('signInDiv'),
    {theme:'outlined', size: 'large'}
  )
},[])








  return (
    <Grid>
      <Paper
        sx={{
          display: "inline-flex",
          width: "1000px",
          height: "530px",
          justifyContent: "center",
          background: "#ECECEC",
          border: "8px solid #BAE6FC",
          borderRadius: "40px",
          textAlign: "center",
          transform: "translate(0, 15%)",
        }}
      >
        <div>
          <div>
            <h2>Авторизация</h2>
          </div>
          <div id="signInDiv"></div>
          <div className={s.input}>
            <TextField label="Почта" placeholder="Введите вашу почту" />
            <TextField
              label="Пароль"
              placeholder="Введите ваш пароль"
              type="password"
            />
            <Typography>
              <Link href="#" className={s.forgot}>
                Забыли пароль?
              </Link>
            </Typography>
            <button className={s.button} type="submit">
              Войти <img src={Cross} />
            </button>
            <Typography> Нет учетной записи?</Typography>
            <Link to="/register">Регистрация</Link>
          </div>
        </div>
        <div>
          <div className={s.border}></div>
        </div>

        <img className={s.photo} src={Photo_login} />
        <img className={s.logo} src={Logo} />
      </Paper>
    </Grid>
  );
};

export default Login;
