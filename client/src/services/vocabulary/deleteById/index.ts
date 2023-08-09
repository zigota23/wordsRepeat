import { inctance } from "@src/services"


export const deleteById = (id:string) =>inctance.delete(`vocabulary/${id}`)