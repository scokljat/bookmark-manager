import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="md"
        alignSelf="flex-end"
        onClick={toggleColorMode}
        m={30}
        mb={5}
      />
    </VStack>
  );
}

export default ThemeSwitcher;
