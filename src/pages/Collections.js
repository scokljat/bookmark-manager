import { useForm } from "react-hook-form";
import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";

function Collections() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const isInvalid = watch("collection", false);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <Flex ml={10}>
          <FormControl>
            <Input
              {...register("collection", {
                required: "Collection's name is required!",
                minLength: {
                  value: 2,
                  message: "Collection's name must be at least 2 charachters!",
                },
                maxLength: {
                  value: 10,
                  message: "Collection's name must not exceed 10 characters!",
                },
              })}
              type="text"
              placeholder="Collection"
              mb={5}
            />
            {errors.collection && (
              <Text pb={5}>{errors.collection.message}</Text>
            )}
          </FormControl>
          <Button
            color="teal"
            disabled={!isInvalid}
            type="submit"
            ml={5}
            w={300}
          >
            Add a new collection
          </Button>
        </Flex>
      </form>
    </>
  );
}

export default Collections;
