import { useState } from "react";
import { Flex, Text, IconButton, Divider, Heading } from "@chakra-ui/react";
import { FiMenu, FiUser } from "react-icons/fi";
import { BiCollection } from "react-icons/bi";
import { GiBookmark } from "react-icons/gi";

function TheSidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      h="100vh"
      w={navSize === "small" ? "75px" : "200px"}
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="teal"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          fontSize={25}
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <Flex mt={5} mb={5} align="center" cursor="pointer">
          <GiBookmark fontSize={25} />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h4" size="sm">
              All bookmarks
            </Heading>
          </Flex>
        </Flex>
        <Flex mb={5} align="center" cursor="pointer">
          <Text fontSize={25}>#</Text>
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h4" size="sm">
              All tags
            </Heading>
          </Flex>
        </Flex>
        <Flex mb={5} align="center" cursor="pointer">
          <BiCollection fontSize={25} />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h4" size="sm">
              Collections
            </Heading>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <FiUser fontSize={25} />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Username
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TheSidebar;
