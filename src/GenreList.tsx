import { List, HStack, Image, Text, Spinner } from "@chakra-ui/react";
import useGenre from "./hooks/useGenre";
import GetcorrpedImg from "./services/image-url";

export default function GenreList() {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner/>;

  return (
    <ul>
      {data.map((genre) => (
        <List key={genre.id}>
          <HStack paddingY={2}>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={GetcorrpedImg(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List>
      ))}
    </ul>
  );
}
