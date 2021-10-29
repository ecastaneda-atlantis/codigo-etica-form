import { Container, Text } from "@chakra-ui/react";
import React from "react";
import { Stack, Image, Box } from "@chakra-ui/react";
import Form from "./Form";
import logo from "./assets/logo.png";
const Home = () => {
  return (
    <>
      <Text
        textAlign="center"
        fontSize="3xl"
        color="rgb(255,146,0)"
        fontWeight="bold"
        pt={"2rem"}
      >
        REPORTE DE INCIDENCIAS
      </Text>
      <Text textAlign="center" fontSize="2xl" pb={"2rem"}>
        Código de Ética
      </Text>
      <Container
        p={5}
        borderRadius={10}
        boxShadow="0 8px 8px 4px rgba(0,0,0,0.2)"
        backgroundColor="#1A202C"
        mt={["2rem", "2rem", "4rem", "4rem"]}
        //backgroundColor="white"
      >
        <Stack spacing={3} mt={3}>
          <Text textAlign="center" fontSize="2xl">
            ¿Cómo funciona?
          </Text>
          <Text textAlign="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
            arcu odio. Morbi ut efficitur ante. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Suspendisse fermentum diam elit, in pretium nibh viverra vitae.
            Maecenas sed feugiat leo. Donec pretium leo ut purus malesuada
            vestibulum. Integer quis leo et arcu luctus sollicitudin. Nullam
            tincidunt blandit egestas. Duis dignissim felis ut rutrum ornare.
          </Text>
          <Form />
        </Stack>
      </Container>
      <Container
        py={"2rem"}
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Image src={logo} maxWidth={"10rem"} />
        </Box>
      </Container>
    </>
  );
};

export default Home;
