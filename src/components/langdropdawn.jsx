import { MenuItem, Menu, IconButton } from "@mui/material";
import { useState } from "react";
import { Language } from "@mui/icons-material";
import i18next from "i18next";
const LangugeDropdown = ({ languages }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (code) => {
    setAnchorEl(null);
    i18next.changeLanguage(code);
  };
  return (
    <>
      <IconButton
        sx={{ color: "white" }}
        id="basic-button"
        onClick={handleClick}
      >
        <Language />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {languages.map((el) => (
          <MenuItem
            key={el.code}
            onClick={() => {
              handleClose(el.code);
            }}
          >
            {el.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LangugeDropdown;
