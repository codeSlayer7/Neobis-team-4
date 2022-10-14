import {Box} from '@mui/material'

// + formik@2.2.9
//+ formik-mui@5.0.0-alpha.0  добавил их уже

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
const Authoriazation = () => {
    return ( 
        <Container fixed>
        <UserBox sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>

        </UserBox>
      </Container>
     );
}
 
export default Authoriazation;