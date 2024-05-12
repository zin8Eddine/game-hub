import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="teal"
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
        size="md"
      />
      <Text whiteSpace="nowrap"> Dark mode</Text>
    </HStack>
  );
}
