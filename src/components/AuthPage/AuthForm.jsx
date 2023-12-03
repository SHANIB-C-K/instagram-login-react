import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { VStack } from "@chakra-ui/react";

const AuthForm = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);
  return (
    <>
      <Box border={"1px solid grey"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="instagram" />
          <Input placeholder="Email" type="email" fontSize={14} />
          <Input placeholder="Password" type="password" fontSize={14} />
          {!isLogedIn ? (
            <Input
              placeholder="Conform Password"
              type="password"
              fontSize={14}
            />
          ) : null}

          <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
            {isLogedIn ? "Login" : "Sign up"}
          </Button>

          {/* -------- OR -------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={5} alt="google logo" />
            <Text mx={2} color={"blue.500"}>
              Login with Google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogedIn ? "Dont have an account?" : "Already have a account"}
          </Box>
          <Box
            onClick={() => setIsLogedIn(!isLogedIn)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogedIn ? "Sign up" : "Login"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
