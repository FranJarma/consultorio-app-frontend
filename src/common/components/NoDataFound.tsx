import { InfoOutlined } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'

type NoDataFound = {
    entity: string
};

export const NoDataFound = ({ entity }: NoDataFound) => {
  return (
    <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "gray" }}>
        <InfoOutlined/><Typography variant="subtitle1">Sin {entity}</Typography>
    </Stack>
  )
}
