import simpleRestProvider from "ra-data-simple-rest";
import { CreateParams, fetchUtils } from "react-admin";

const httpClient = fetchUtils.fetchJson;
const apiUrl = import.meta.env.VITE_SIMPLE_REST_URL;

const restProvider = simpleRestProvider(apiUrl, httpClient, 'X-Total-Count');

export const dataProvider = {
  ...restProvider,
  create: (resource: string, params: CreateParams<any>) => {
    if (resource === 'clinical-stories') {
      const formData = new FormData();
      formData.append('odontogram', params.data.odontogram.rawFile);
      formData.append('patientId', params.data.patientId);
      formData.append('observations', params.data.observations);
      formData.append('treatmentPlan', params.data.treatmentPlan);
      return httpClient(`${apiUrl}/${resource}`, {
        method: 'POST',
        body: formData,
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id, url: json.url },
      }));
    }
    return restProvider.create(resource, params);
  },
}
