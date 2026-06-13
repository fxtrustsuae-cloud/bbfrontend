import { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { logoutThunk } from '../../globalState/auth/authThunk';
import { useDispatch } from 'react-redux';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';


const rankMapping = [
    {
        rankTitle: "0",
        description: "Entry"
    },
    {
        rankTitle: "1",
        description: "Connector"
    },
    {
        rankTitle: "2",
        description: "Builder"
    },
    {
        rankTitle: "3",
        description: "Coordinator"
    },
    {
        rankTitle: "4",
        description: "Leader"
    },
    {
        rankTitle: "5",
        description: "Strategist"
    },
    {
        rankTitle: "6",
        description: "Advisor"
    },
    {
        rankTitle: "7",
        description: "Director"
    },
    {
        rankTitle: "8",
        description: "Partner"
    },
    {
        rankTitle: "9",
        description: "Executive"
    },
    {
        rankTitle: "10",
        description: "Chief"
    }
]


function HeaderMenuComponent({ Icon, userData }) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleLogOut() {
        dispatch(logoutThunk());
        navigate("/", { replace: true });
    }

    const handleRankMaping = (rank) => {
        const rankType = rankMapping.filter(item => item.rankTitle == rank)
        return rankType?.[0]?.description
    }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Profile">
                    <IconButton
                        onClick={handleClick}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Icon sx={{ color: "primary.main" }} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            minWidth: "250px",
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem sx={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    py: 0
                }}>
                    <Typography>Name: {userData?.name}</Typography>
                    <Typography>Rank: {handleRankMaping(userData?.rank)}</Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} component={Link} to={"/dashboard/setting/profile"}>
                    <ListItemIcon>
                        <PermIdentityOutlinedIcon fontSize="small" />
                    </ListItemIcon> Profile
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to={"/dashboard/transaction"}>
                    <ListItemIcon>
                        <ReceiptLongIcon fontSize="small" />
                    </ListItemIcon> My transactions
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}


export default HeaderMenuComponent;