import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GiBookmark } from "react-icons/gi";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Text,
} from "@chakra-ui/react";
import { signIn } from "../actions";
import { Navigate } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const isInvalid = watch("email", false) && watch("password", false);

  const onSubmit = (values) => {
    dispatch(signIn(values));
  };

  return (
    <>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <Flex width="100%" justifyContent="center" p={10}>
          <Flex flexDirection="column" mt={35} alignItems="center">
            <Text color="teal" fontSize="50px" mb={10}>
              Login to your account
            </Text>
            <FormControl>
              <Input
                {...register("email", {
                  required: "Email is required!",
                })}
                type="email"
                placeholder="Email"
                mb={5}
              />
              {errors.email && <Text pb={5}>{errors.email.message}</Text>}
            </FormControl>
            <FormControl>
              <InputGroup>
                <Input
                  isRequired
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required!",
                    minLength: {
                      value: 5,
                      message: "Password must be at least 5 charachters!",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must not exceed 20 characters!",
                    },
                  })}
                  mb={5}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    height="1.75rem"
                    size="sm"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && <Text pb={5}>{errors.password.message}</Text>}
            </FormControl>
            <Button
              disabled={!isInvalid}
              colorScheme="teal"
              type="submit"
              alignItems="center"
              mb={5}
            >
              Login
            </Button>
            <NavLink to="/sign-up">
              <Text fW="bold" pl={4} color="teal" mb={5}>
                Sign up
              </Text>
            </NavLink>
            <NavLink to="/">
              <GiBookmark fontSize="50px" />
            </NavLink>
          </Flex>
        </Flex>
      </form>
    </>
  );
}

export default Signup;
