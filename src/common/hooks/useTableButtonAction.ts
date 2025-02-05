import { useCreate, useUpdate, useRecordContext } from "react-admin";

type ActionType = "CREATE" | "UPDATE";

export const useTableButtonAction = (resource: string, action: ActionType) => {
  const record = useRecordContext();

  const [create, { isPending: isCreating, isSuccess: isSuccessCreate, error: createError }] = useCreate();
  const [update, { isPending: isUpdating, isSuccess: isSuccessUpdate, error: updateError }] = useUpdate();

  const executeAction = (data: any) => {
    if (action === "CREATE") {
      return create(resource, { data });
    }
    if (action === "UPDATE") {
      return record ? update(resource, { id: record.id, data }) : Promise.reject(new Error("Record is undefined"));
    }
  };

  return {
    isPending: isCreating || isUpdating,
    isSuccess: isSuccessCreate || isSuccessUpdate,
    error: createError || updateError,
    executeAction,
  };
};
