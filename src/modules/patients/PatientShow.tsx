import { Show, useShowContext } from 'react-admin';
import { Grid } from '@mui/material';
import MyBreadcrumbs from '../../common/components/ui/Breadcrumb';
import { PatientClinicalStories, PatientInfo, PatientTurns } from './components/show';
import { Patient } from './types/patients';

const PatientShowView = () => {
    const { record } = useShowContext<Patient>();
    
    if(!record) return null;

    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid item xs={12} lg={8}>
                <PatientInfo record={record} />
            </Grid>
            <Grid item xs={12} lg={4}>
                <PatientTurns record={record} />
            </Grid>
            <Grid item xs={12}>
                <PatientClinicalStories record={record} />
            </Grid>
        </Grid>
    );
}

export const PatientShow = () => {
  return (
    <>
      <MyBreadcrumbs style={{ padding: 15 }} />
      <Show component="div">
        <PatientShowView />
      </Show>
    </>
  );
};
