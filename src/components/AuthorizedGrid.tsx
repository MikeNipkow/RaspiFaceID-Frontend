import { FormEvent, useRef } from "react";
import useAuthorized, {
  Authorized,
  createAuthorized,
  deleteAuthorized,
} from "../hooks/useAuthorized";
import { Alert, AlertIcon, Button, Divider, Grid, HStack, Input } from "@chakra-ui/react";
import AuthorizedCard from "./AuthorizedCard";
import CardSkeleton from "./CardSkeleton";

const AuthorizedGrid = () => {
  const { data, setData, isLoading, error } = useAuthorized();
  const nameRef = useRef<HTMLInputElement>(null);

  const skeletons = [1, 2, 3, 4, 5, 6];

  const handleCreate = (event: FormEvent) => {
    event.preventDefault();

    if (nameRef.current === null) return;
    const name = nameRef.current.value;

    if (name.length == 0 || name.includes(" ")) return;

    createAuthorized(name, (data) => setData(data));
  };

  const handleDelete = (authorized: Authorized) => {
    if (history == null) return;

    deleteAuthorized(authorized.file, (data) => setData(data));
  };

  return (
    <>
      {error && <Alert status="error"><AlertIcon />Personen konnten nicht geladen werden.</Alert>}
      
      {!isLoading && !error && 
      <form onSubmit={(event) => handleCreate(event)}>
        <HStack paddingBottom="5px" width="60%" marginX="auto">
          <Input
            ref={nameRef}
            type="text"
            placeholder="Namen eingeben..."
          ></Input>
          <Button type="submit">Speichern</Button>
        </HStack>
      </form>}
      <Divider />
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap="2"
        paddingTop={"5px"}
      >
        {isLoading &&
        skeletons.map(() => (
            <CardSkeleton />
        ))}
        {data?.map((authorized) => (
          <AuthorizedCard
            onDelete={() => handleDelete(authorized)}
            key={authorized.file}
            authorized={authorized}
          ></AuthorizedCard>
        ))}
      </Grid>
    </>
  );
};

export default AuthorizedGrid;
