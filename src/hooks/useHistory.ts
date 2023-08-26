import useData, { deleteData } from "./useData"


export interface History {
    name: string,
    file: string,
    timestamp: {
        year: number,
        month: number,
        day:number,
        hour: number,
        minute: number,
        second: number
    }
}

const useHistory = () => useData<History[]>("/history")
export const deleteHistory = (file: string, onResponse?: (data: History[]) => void) => deleteData<History[]>("/history/" + file, onResponse)

export default useHistory