import useData from "./useData";

export interface Info {
    camera: {
        connected: boolean
    },
    pi: {
        connected: boolean
    }
}

const useInfo = () => useData<Info>("/")

export default useInfo;