import useHistory from "../hooks/useHistory";
import HistoryCard from "./HistoryCard";
import { Grid } from "@chakra-ui/react";

const HistoryGrid = () => {
  const { data } = useHistory();
  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      gap="2"
    >
      {data?.map((history) => (
        <HistoryCard key={history.endpoint} history={history}></HistoryCard>
      ))}
    </Grid>
  );
};

export default HistoryGrid;
