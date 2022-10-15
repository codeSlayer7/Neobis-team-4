import React from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import Photo_register from "../../../images/photoRegister.png";
import s from "./index.module.css";
import Logo from "../../../images/logo.svg";
import Cross from "../../../images/cross.svg";

const Signup = () => {
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
          transform: "translate(0, 8%)",
        }}
      >
        <img className={s.photo} src={Photo_register} />
        <img className={s.logo} src={Logo} />
        <div className={s.border}></div>
        <div>
          <div>
            <h2 className={s.title}>Регистрация</h2>
          </div>
          <div>
            <form className={s.input}>
              <TextField label="Имя" placeholder="Введите ваше имя" />
              <TextField label="Фамилия" placeholder="Введите вашу фамилию" />
              <TextField label="Gmail" placeholder="Введите вашу почту" />
              <TextField label="Пароль" placeholder="Введите ваш пароль" />
              <button type="submit" className={s.button}>
                Зарегистрироваться <img src={Cross} />
              </button>
            </form>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default Signup;
