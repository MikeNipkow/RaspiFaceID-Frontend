import useHistory, { History, deleteHistory } from "../hooks/useHistory";
import CardSkeleton from "./CardSkeleton";
import HistoryCard from "./HistoryCard";
import { Alert, AlertIcon, Grid } from "@chakra-ui/react";

const HistoryGrid = () => {
  const { data, setData, isLoading, error } = useHistory();

  const skeletons = [1, 2, 3, 4, 5, 6];

  const handleDelete = (history: History) => {
    if (history == null) return;

    deleteHistory(history.file, (data) => setData(data));
  };

  return (
    <>
    {error && <Alert status="error"><AlertIcon/>Historie konnte nicht geladen werden.</Alert>}
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      gap="2"
    >
      {isLoading &&
        skeletons.map(() => (
            <CardSkeleton />
        ))}
        
      {data?.map((history) => (
        <HistoryCard
          onDelete={() => handleDelete(history)}
          key={history.file}
          history={history}
        ></HistoryCard>
      ))}
      
    </Grid>
    </>
  );
};

export default HistoryGrid;
