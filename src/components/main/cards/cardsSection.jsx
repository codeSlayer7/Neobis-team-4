import React from "react";
import s from "./index.module.css";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Square from "../../../images/square.svg";
import AlaArcha from "../../../images/alaArcha.svg";
import Rivers from "../../../images/rivers.svg";

const CardsBox = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "F5F5F5",
          maxWidth: 340,
          margin: "auto",
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        ></Typography>
        <Card className={s.root}>
          <CardActionArea>
            <img src={Square} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Площадь Ала-Тоо
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Площадь Ала-Тоо — центральная площадь Бишкека, столицы Киргизии.
                По её периметру расположены Государственный Исторический музей,
                памятник ...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small">Подробнее</Button>
          </CardActions>
        </Card>
        <br />
        <Card className={s.root}>
          <CardActionArea>
            <img src={AlaArcha} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Национальный парк Ала-Арча
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Государственный природный парк Ала-Арча — парк, расположенный в
                Кыргызстане на расстоянии 41 км от её столицы на северном склоне
                Кыргыз Ала-Тоо...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small">Подробнее</Button>
          </CardActions>
        </Card>
        <br />
        <Card className={s.root}>
          <CardActionArea>
            <img src={Rivers} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Национальный парк Ала-Арча
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Государственный природный парк Ала-Арча — парк, расположенный в
                Кыргызстане на расстоянии 41 км от её столицы на северном склоне
                Кыргыз Ала-Тоо...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small">Подробнее</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default CardsBox;
