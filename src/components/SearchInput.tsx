import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";


interface Props{

    onSearch:(gameName:string)=>void
}
export default function SearchInput({onSearch}:Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(e) => {
            e.preventDefault()
        if (ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="grey.100" />
        </InputLeftElement>
        <Input
          borderRadius={20}
          variant="filled"
          type="text"
          placeholder="Search games..."
          ref={ref}
        />
      </InputGroup>
    </form>
  );
}
