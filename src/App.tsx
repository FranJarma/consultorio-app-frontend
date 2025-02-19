import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  defaultTheme,
} from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { CalendarMonthOutlined, DescriptionOutlined, HealthAndSafetyOutlined, LocationCityOutlined, PeopleOutlined } from "@mui/icons-material";
import { deepmerge } from '@mui/utils';
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { spanish } from "./common/language/ra-spanish";
import { MyLogin } from "./modules/login/Login";
import { PatientCreate, PatientEdit, PatientList } from "./modules/patients";
import { PatientShow } from "./modules/patients/PatientShow";
import { TurnList } from "./modules/turns/TurnList";
import { ClinicalStoryList } from "./modules/clinical-stories/ClinicalStoryList";
import { ClinicalStoryCreate } from "./modules/clinical-stories/components/ClinicalStoryCreate";
import { ClinicalStoryEdit } from "./modules/clinical-stories/components/ClinicalStoryEdit";
import { HealthEnsuranceList } from "./modules/health-ensurances/HealthEnsuranceList";
import { HealthEnsuranceCreate } from "./modules/health-ensurances/components/HealthEnsuranceCreate";
import { HealthEnsuranceEdit } from "./modules/health-ensurances/components/HealthEnsuranceEdit";
import { LocalityCreate } from "./modules/localities/components/LocalityCreate";
import { LocalityList } from "./modules/localities/LocalityList";
import { LocalityEdit } from "./modules/localities/components/LocalityEdit";


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
      show={PatientShow}
    />
    <Resource
      name="turns"
      icon={CalendarMonthOutlined}
      options={{
        label: "Turnos",
      }}
      list={TurnList}
    />
    <Resource
      name="clinical-stories"
      icon={DescriptionOutlined}
      options={{
        label: "Historias Clínicas",
      }}
      list={ClinicalStoryList}
      create={ClinicalStoryCreate}
      edit={ClinicalStoryEdit}
    />
    <Resource
      name="health-ensurances"
      icon={HealthAndSafetyOutlined}
      options={{
        label: "Obras sociales",
      }}
      create={HealthEnsuranceCreate}
      list={HealthEnsuranceList}
      edit={HealthEnsuranceEdit}
    />
    <Resource
      name="localities"
      icon={LocationCityOutlined}
      options={{
        label: "Localidades",
      }}
      create={LocalityCreate}
      list={LocalityList}
      edit={LocalityEdit}
    />
  </Admin>
);
