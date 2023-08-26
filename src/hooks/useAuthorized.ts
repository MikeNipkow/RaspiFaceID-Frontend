import useData, { deleteData, postData } from "./useData"


export interface Authorized {
    name: string,
    file: string
}

const useAuthorized = () => useData<Authorized[]>("/authorized")
export const createAuthorized = (name: string, onResponse?: (data: Authorized[]) => void) => postData<Authorized[]>("/authorized/" + name, undefined, onResponse)
export const deleteAuthorized = (file: string, onResponse?: (data: Authorized[]) => void) => deleteData<Authorized[]>("/authorized/" + file, onResponse)

export default useAuthorized