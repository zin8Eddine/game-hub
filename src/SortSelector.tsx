import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";



interface Props{
  onSelectOrder:(order:string)=>void
  sortOrder:string
}

export default function SortSelector({onSelectOrder,sortOrder}:Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const selectedLabel = sortOrders.find(order => order.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Sort by {selectedLabel?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem key={order.value} onClick={()=> onSelectOrder(order.value)}> {order.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
