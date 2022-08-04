import { types } from "../types/types";

export const startLoading = () =>({
    type: types.iuStartLoading,
})

 export const finishLoading = () => ({
    type: types.iuFinishLoading,
 })