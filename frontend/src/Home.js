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
            Ahora que ya conoces los lineamientos éticos que marca GEA, hemos
            creado este espacio para que puedas reportar cualquier incidente que
            viole lo manifestado en el Código de Ética y Conducta. Cuando
            elabores tu reporte, es necesario que nos brindes la información
            necesaria para poder iniciar una investigación y dar un buen
            seguimiento. La situación que nos reportes, deberá tener el mayor
            detalle posible, puedes incluir testigos y fechas. Es importante que
            nos proporciones tu nombre el cual se mantendrá en absoluta
            confidencialidad, ya que toda denuncia anónima pierde validez.
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
