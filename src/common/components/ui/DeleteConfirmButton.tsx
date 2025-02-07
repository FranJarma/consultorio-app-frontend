import { DeleteWithConfirmButton, useRecordContext } from 'react-admin'

type DeleteWithConfirmButtonProps = {
    model: string;
    titleProp: string;
}

export const DeleteConfirmButton = ({ model, titleProp }: DeleteWithConfirmButtonProps) => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <DeleteWithConfirmButton confirmTitle={`Borrar ${model}: ${record ? record[titleProp] : ''}`}/>
  )
}
