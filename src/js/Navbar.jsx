import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const navButtonStyles = {
    fontSize: '22px',
    color: 'black',
    border: 'solid 3px black',
    padding: '20px 10px',
    marginLeft: '10px',
  }

  return (
    <div id="navbar">
      <Button sx={navButtonStyles} className="nav-button">
        <Link to="/">Home</Link>
      </Button>
      <Button
        sx={navButtonStyles}
        className="nav-button"
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Tools
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="compareLists">Compare Lists</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="authorCard">Adaptive Cards</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}
