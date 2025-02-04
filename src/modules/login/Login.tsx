import { Login } from 'react-admin';
import { HealthAndSafetyRounded } from '@mui/icons-material';
import { Typography } from '@mui/material';

export const MyLogin = () => (
    <Login backgroundImage="/public/login.png" avatarIcon={<HealthAndSafetyRounded/>}   />
);