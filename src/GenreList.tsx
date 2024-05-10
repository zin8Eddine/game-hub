import {
  List,
  HStack,
  Image,
  Spinner,
  ListItem,
  Button,
} from "@chakra-ui/react";
import useGenre, { Genre } from "./hooks/useGenre";
import GetcorrpedImg from "./services/image-url";

interface Props {
  onSelectGenre: (gere: Genre) => void;
  selectedGenre:Genre | null
}

export default function GenreList({selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} onClick={() => onSelectGenre(genre)}>
          <HStack paddingY={2}>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={GetcorrpedImg(genre.image_background)}
            />
            <Button variant="link" fontSize={"md"} fontWeight={selectedGenre?.id === genre.id ? "bold":"norml"}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
