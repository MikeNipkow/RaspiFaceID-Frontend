import { FormEvent, useRef } from "react";
import useAuthorized, {
  Authorized,
  createAuthorized,
  deleteAuthorized,
} from "../hooks/useAuthorized";
import { Button, Divider, Grid, HStack, Input } from "@chakra-ui/react";
import AuthorizedCard from "./AuthorizedCard";

const AuthorizedGrid = () => {
  const { data, setData } = useAuthorized();
  const nameRef = useRef<HTMLInputElement>(null);

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
      <form onSubmit={(event) => handleCreate(event)}>
        <HStack paddingBottom="10px" width="60%" marginX="auto">
          <Input
            ref={nameRef}
            type="text"
            placeholder="Namen eingeben..."
          ></Input>
          <Button type="submit">Speichern</Button>
        </HStack>
      </form>
      <Divider />
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap="2"
      >
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
