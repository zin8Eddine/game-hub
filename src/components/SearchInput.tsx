import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
export default function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="grey.100" />
      </InputLeftElement>
      <Input
        borderRadius={20}
        variant="filled"
        type="text"
        placeholder="Search games..."
        onChange={(e) => console.log(e.target.value)}
      />
    </InputGroup>
  );
}
