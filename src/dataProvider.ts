import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";

export const dataProvider = simpleRestProvider(
  import.meta.env.VITE_SIMPLE_REST_URL,
  fetchUtils.fetchJson, 'X-Total-Count'
);
