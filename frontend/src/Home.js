import { Container, Text } from "@chakra-ui/react";
import React from "react";
import { Stack, Image, Box, Flex, Grid, Button } from "@chakra-ui/react";
import CODIGO from "./assets/img/CODIGO.png";

import Form from "./Form";
const Home = () => {
  return (
    <>
      <Text
        textAlign="center"
        fontSize="6xl"
        // color="rgb(255,146,0)"
        color='rgb(50,50,50)'
        fontWeight="bold"
        pt={"2rem"}
      >
        Exprésate
      </Text>
      <Text textAlign="center" fontSize="2xl" pb={"2rem"} color='rgb(150,150,150)'>
        #anonimo
      </Text>
      <Container maxW="container.xl" mt={"5rem"} mb={"3rem"}>
        <Grid
          borderRadius={10}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={"2rem"}
          margin={"0 auto"}
        >
          <Stack
            spacing={4}
            
            p={3}
            w="100%"
            background="#fff"
            boxShadow="0 8px 8px 4px rgba(0,0,0,0.2)"
            borderRadius="1rem"
          >
            <Text textAlign="center" fontWeight="bold" fontSize="3xl">
              ¿Cómo funciona?
            </Text>
            <Text textAlign="left">
              Ahora que ya conoces los lineamientos éticos que marca GEA, hemos
              creado este espacio para que puedas reportar cualquier incidente
              que viole lo manifestado en el Código de Ética y Conducta. Cuando
              elabores tu reporte, es necesario que nos brindes la información
              necesaria para poder iniciar una investigación y dar un buen
              seguimiento. La situación que nos reportes, deberá tener el mayor
              detalle posible, puedes incluir testigos y fechas. Es importante
              que nos proporciones tu nombre el cual se mantendrá en absoluta
              confidencialidad, ya que toda denuncia anónima pierde validez.
            </Text>
            <Form />
          </Stack>
          <Stack
            spacing={4}
            
            p={3}
            w="100%"
            borderRadius="1rem"
            background="#fff"
            boxShadow="0 8px 8px 4px rgba(0,0,0,0.2)"
          >

            <Text textAlign="center" fontSize="3xl">
              ¿Ya viste nuestro nuevo código de ética?
            </Text>
            <Container>
              <Image
                src={CODIGO}
                maxH="30rem"
                margin="0 auto"
                onClick={() => window.open("https://people-rhea.me/etica/")}
              />
            </Container>
            <Container display="flex" justifyContent="center">
              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                background="rgb(255,146,0)"
                _hover={{ bg: "#e28029", color: "white" }}
                _active={{
                  bg: "#e28029",
                }}
                onClick={() => window.open("https://people-rhea.me/etica/")}
              >
                Ver completo
              </Button>
            </Container>
          </Stack>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
