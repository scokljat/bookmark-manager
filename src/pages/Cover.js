import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { GiBookmark } from "react-icons/gi";

function Cover() {
  let navigate = useNavigate();
  return (
    <>
      <Flex justifyContent="flex-end" mr={30}>
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => {
            navigate("login");
          }}
        >
          <FiUser />
          Login
        </Button>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mt="120px">
        <Flex flexDirection="column" alignItems="center">
          <GiBookmark fontSize="50px" mr={30} />
          <Text fontSize="50px" as="i" mr={30}>
            Bookmark manager
          </Text>
          <Text fontSize="25px" as="i" mr={30} mt="20px">
            Intuitive. Powerful. Runs everywhere
          </Text>
          <Button
            colorScheme="teal"
            size="md"
            mt="20px"
            onClick={() => {
              navigate("sign-up");
            }}
          >
            Sign up
          </Button>
        </Flex>
        <video
          src={video}
          height="500px"
          width="500px"
          autoPlay
          loop
          muted
        ></video>
      </Flex>
    </>
  );
}

export default Cover;
