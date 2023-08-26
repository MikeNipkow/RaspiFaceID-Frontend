import useHistory, { History, deleteHistory } from "../hooks/useHistory";
import HistoryCard from "./HistoryCard";
import { Grid } from "@chakra-ui/react";

const HistoryGrid = () => {
  const { data, setData } = useHistory();

  const handleDelete = (history: History) => {
    if (history == null) return;

    deleteHistory(history.file, (data) => setData(data));
  };

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      gap="2"
    >
      {data?.map((history) => (
        <HistoryCard
          onDelete={() => handleDelete(history)}
          key={history.file}
          history={history}
        ></HistoryCard>
      ))}
    </Grid>
  );
};

export default HistoryGrid;
