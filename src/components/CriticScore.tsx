import { Badge } from "@chakra-ui/react";
interface Props {
  metacritic: number;
}

export default function CriticScore({ metacritic }: Props) {
  let color = metacritic > 90 ? "green" : metacritic > 75 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"16px"}
      paddingX={2}
      borderRadius="5px"
    >
      {metacritic}
    </Badge>
  );
}
