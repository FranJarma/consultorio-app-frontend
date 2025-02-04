import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  defaultTheme,
} from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { CalendarMonthOutlined, DescriptionOutlined, PeopleOutlined } from "@mui/icons-material";
import { deepmerge } from '@mui/utils';
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { spanish } from "./common/language/ra-spanish";
import { MyLogin } from "./modules/login/Login";
import { PatientCreate, PatientEdit, PatientList } from "./modules/patients";


const i18nProvider = polyglotI18nProvider(() => spanish, "es");

const myTheme = deepmerge(defaultTheme, {
  palette: {
      primary: {
        main:  '#1976d2'
      },
      secondary: {
        main: '#46b298'
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
  },
  typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
  },
});

export const App = () => (
  <Admin
    loginPage={MyLogin}
    layout={Layout}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    theme={myTheme}
  >
    <Resource
      name="patients"
      icon={PeopleOutlined}
      options={{
        label: "Pacientes",
      }}
      create={PatientCreate}
      list={PatientList}
      edit={PatientEdit}
      show={ShowGuesser}
    />
    <Resource
      name="turns"
      icon={CalendarMonthOutlined}
      options={{
        label: "Turnos",
      }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="clinical-stories"
      icon={DescriptionOutlined}
      options={{
        label: "Historias Clínicas",
      }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
