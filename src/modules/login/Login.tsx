import { Login } from 'react-admin';
import { HealthAndSafetyRounded } from '@mui/icons-material';

export const MyLogin = () => (
    <Login backgroundImage="login.png" avatarIcon={<HealthAndSafetyRounded/>}   />
);