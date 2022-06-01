import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import ThemeSwitcher from "../assets/components/ThemeSwitcher";

function Cover() {
  let navigate = useNavigate();
  return (
    <>
      {" "}
      <Flex justifyContent={"space-between"} m={"30px"}>
        <ThemeSwitcher />
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
      <Flex alignItems="center" justifyContent="center" mt={"120px"}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Text fontSize={"50px"} as="i" mr={"30px"}>
            Bookmark manager
          </Text>
          <Text fontSize={"25px"} as="i" mr={"30px"} mt={"20px"}>
            Intuitive. Powerful. Runs everywhere
          </Text>
          <Button
            colorScheme="teal"
            size="md"
            mt={"20px"}
            onClick={() => {
              navigate("sign-up");
            }}
          >
            Sign up
          </Button>
        </Flex>
        <video
          src={video}
          height={"500px"}
          width={"500px"}
          autoPlay
          loop
          muted
        ></video>
      </Flex>
    </>
  );
}

export default Cover;
