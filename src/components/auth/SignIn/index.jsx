import React from "react";
import s from "./index.module.css";
import Photo_login from "../../../images/photoLogin.png";
import Logo from "../../../images/logo.svg";
import Cross from "../../../images/cross.svg";
import { Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const Login = () => {











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
