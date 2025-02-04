import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { PatientCreate } from "./patients/PatientCreate";
import { PatientList } from "./patients/PatientList";
import { CalendarMonthOutlined, DescriptionOutlined, PeopleOutlined } from "@mui/icons-material";
import { spanish } from "./common/language/ra-spanish";

const i18nProvider = polyglotI18nProvider(() => spanish, "es");

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
  >
    <Resource
      name="patients"
      icon={PeopleOutlined}
      options={{
        label: "Pacientes",
      }}
      create={PatientCreate}
      list={PatientList}
      edit={EditGuesser}
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
