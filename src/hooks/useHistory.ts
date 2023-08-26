import useData from "./useData"


export interface History {
    endpoint: string,
    name: string,
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

export default useHistory