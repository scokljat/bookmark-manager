import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { getBookmarks, getUser, pagination } from "../action";

function Home() {
  const bookmarks = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks());
    // dispatch(getUser());
    //dispatch(pagination());
  }, [dispatch]);

  const token = JSON.parse(localStorage.getItem("supabase.auth.token"));
  console.log(token.currentSession.user.id);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <SimpleGrid
      columns={{ sm: "2", md: "3", lg: "5" }}
      spacing={5}
      ml={10}
      mr={10}
      height="20%"
    >
      {bookmarks.map((bookmark) => {
        if (bookmark.user_id === token.currentSession.user.id) {
          return (
            <Flex
              flexDirection="column"
              borderRadius={5}
              p={10}
              backgroundColor="teal"
              height="fit-content"
            >
              <Button
                borderRadius="none"
                background="none"
                fontWeight="bold"
                fontSize={{ sm: "12", md: "12", lg: "15" }}
                onClick={() => openInNewTab(bookmark.url)}
              >
                {bookmark.description}
              </Button>
            </Flex>
          );
        }
      })}
    </SimpleGrid>
  );
}

export default Home;
