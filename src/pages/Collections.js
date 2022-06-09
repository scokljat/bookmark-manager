import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { addCollection, getBookmarks, getCollections } from "../action";

function Collections() {
  const collections = useSelector((state) => state.collections);
  const bookmarks = useSelector((state) => state.bookmarks);

  const [collectionName, setCollectionName] = useState("");

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const isInvalid = watch("collection", false);

  useEffect(() => {
    dispatch(getBookmarks());
    dispatch(getCollections());
  }, [dispatch]);

  const onSubmit = (values) => {
    if (collections.length < 10) {
      dispatch(addCollection(values));
    } else {
      console.log("Limit");
    }
  };
  console.log(collectionName);
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column">
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <Flex ml={10} justifyContent="space-between">
            <FormControl>
              <Input
                {...register("collection", {
                  required: "Collection's name is required!",
                  minLength: {
                    value: 2,
                    message:
                      "Collection's name must be at least 2 charachters!",
                  },
                  maxLength: {
                    value: 10,
                    message: "Collection's name must not exceed 10 characters!",
                  },
                })}
                type="text"
                placeholder="Collection"
                mb={5}
                w="350px"
              />
              {errors.collection && (
                <Text pb={5}>{errors.collection.message}</Text>
              )}
            </FormControl>
            <Button
              backgroundColor="teal"
              disabled={!isInvalid}
              type="submit"
              ml={50}
              w={100}
            >
              Add
            </Button>
          </Flex>
        </form>
        <Flex>
          {collections.map((collection) => {
            return (
              <Flex flexDirection="column">
                <Button
                  p={5}
                  m={5}
                  key={collection.id}
                  onClick={() => {
                    setCollectionName(collection.name);
                  }}
                >
                  {collection.name}
                </Button>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      {bookmarks.map((bookmark) => {
        if (bookmark.collection === collectionName) {
          return <Text>{bookmark.description}</Text>;
        }
      })}
    </Flex>
  );
}

export default Collections;
