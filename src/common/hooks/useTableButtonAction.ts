import { useCreate, useUpdate, useRecordContext } from "react-admin";

type ActionType = "CREATE" | "UPDATE";

export const useTableButtonAction = (resource: string, action: ActionType) => {
  const record = useRecordContext();

  const [create, {isPending: isPendingCreate}] = useCreate();
  const [update, {isPending: isPendingUpdate}] = useUpdate();

  const executeAction = async (data: any) => {
    try {
      let response;
      if (action === "CREATE") {
        response = await create(resource, { data }, { returnPromise: true });
      } else if (action === "UPDATE") {
        if (!record) throw new Error("Record is undefined");
        response = await update(resource, { id: record.id, data }, { returnPromise: true });
      }

      return response;
    } catch (error: any) {
      throw new Error(error?.body?.message || error?.message || "Error desconocido");
    }
  };

  return {
    executeAction,
    isPending: isPendingCreate || isPendingUpdate
  };
};

