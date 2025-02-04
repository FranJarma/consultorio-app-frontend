import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import { useTranslate } from 'react-admin';

interface MyBreadcrumbsProps {
  style?: React.CSSProperties;
}

const MyBreadcrumbs: React.FC<MyBreadcrumbsProps> = ({ style }) => {
  const location = useLocation();
  const translate = useTranslate();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) return null; // No mostrar breadcrumb en la página de inicio

  const resource = pathSegments[0]; // "patients"
  const action = pathSegments[1] === 'create'
    ? 'create'
    : pathSegments.includes('show')
    ? 'show'
    : pathSegments.length > 1
    ? 'edit'
    : 'list'; // Si no hay acción, es un listado

  const breadcrumbs = [
    {
      label: translate('ra.navigation.home'),
      to: '/',
      icon: <HomeIcon />,
    },
    {
      label: translate(`resources.${resource}.name`, { smart_count: 2 }),
      to: `/${resource}`,
    },
  ];

  if (action !== 'list') {
    breadcrumbs.push({
      label: `${translate(`ra.action.${action}`)} ${translate(`resources.${resource}.singularName`)}`,
      to: ''
    });
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" style={style}>
      {breadcrumbs.map((item, index) =>
        index < breadcrumbs.length - 1 ? (
          <Link key={index} to={item.to ?? '#'} style={{ textDecoration: 'none', color: 'teal' }}>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              {item.icon && <>{item.icon}&nbsp;</>}
              {item.label}
            </Typography>
          </Link>
        ) : (
          <Typography key={index} variant="body2" fontWeight="bold" style={{ color: 'gray' }}>
            {item.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
};

export default MyBreadcrumbs;
