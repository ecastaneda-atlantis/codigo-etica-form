import { Container, Text, GridItem } from "@chakra-ui/react";
import React from "react";
import {
  Stack,
  Image,
  Grid,
  Button,
  Box,
  Link,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import CODIGO from "./assets/img/CODIGO.png";
import flujoEtica from "./assets/img/flujoetica.png";

import Form from "./Form";
const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const padding = useBreakpointValue({
    sm: "10rem",
    md: "10rem",
    lg: "10rem",
    xl: "10rem",
    "2xl": "10rem",
  });
  const containerWidth = useBreakpointValue({
    sm: "container.sm",
    md: "container.sm",
    lg: "container.sm",
    xl: "container.lg",
    "2xl": "container.lg",
  });
  return (
    <Box pb={padding}>
      <Text
        textAlign="center"
        fontSize="6xl"
        fontStyle="italic"
        color="rgb(50,50,50)"
        fontWeight="bold"
        pt={"2rem"}
      >
        Exprésate
      </Text>
      <Container maxW={containerWidth} mt={"5rem"} mb={"3rem"}>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={"2rem"}
          margin={"0 auto"}
        >
          <GridItem colSpan={[1, 1, 2, 2]}>
            <Stack
              spacing={4}
              p={5}
              w="100%"
              background="#fff"
              boxShadow="0 8px 8px 4px rgba(0,0,0,0.2)"
              borderRadius="1rem"
            >
              <Text textAlign="center" fontWeight="bold" fontSize="2xl">
                ¿Cómo funciona?
              </Text>
              <Text textAlign="left" fontSize="sm">
                Ahora que ya conoces los lineamientos éticos que marca GEA,
                hemos creado este espacio para que puedas reportar cualquier
                incidente que viole lo manifestado en el Código de Ética y
                Conducta. Cuando elabores tu reporte, es necesario que nos
                brindes la información necesaria para poder iniciar una
                investigación y dar un buen seguimiento. La situación que nos
                reportes, deberá tener el mayor detalle posible, puedes incluir
                testigos y fechas. Es importante que nos proporciones tu nombre,
                el cual se mantendrá en absoluta confidencialidad, ya que toda
                denuncia anónima pierde validez.
              </Text>
              <Text>
                Conoce el flujo de tu denuncia haciendo click{" "}
                <Link
                  color="blue.600"
                  // href="https://people-rhea.me/flujoetica/flujo.pdf"
                  onClick={() => window.open(flujoEtica)}
                >
                  aquí
                </Link>
                .
              </Text>
              <Form />
              <Modal
                onClose={onClose}
                // size={["xl", "xl", "xl", "xl", "xl"]}
                size="xl"
                isOpen={isOpen}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Flujo de tu denuncia</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {/* Para computadora o tablet */}
                    {/* <Flex
                      border="1px solid red"
                      direction="column"
                      alignContent="center"
                      justifyContent={"center"}
                      margin="0 auto"
                    >
                      <img src={flujoEtica}></img>
                    </Flex> */}
                    {/* 
                    <Flex
                      direction="column"
                      alignContent="center"
                      justifyContent={"center"}
                      margin="0 auto"
                    >
                      <iframe
                        height={"auto"}
                        width={"auto"}
                        src={"https://people-rhea.me/flujoetica/flujoetica.png"}
                      ></iframe>
                    </Flex> */}

                    {/* Para celular */}
                    {/* <Flex direction="column">
                      <iframe
                        width={"100%"}
                        height={"800px"}
                        margin={"0 auto"}
                        src="https://people-rhea.me/flujoetica/flujo.pdf"
                      ></iframe>
                    </Flex> */}
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Cerrar</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Stack>
          </GridItem>
          <Stack
            spacing={4}
            p={5}
            w="100%"
            borderRadius="1rem"
            background="#fff"
            boxShadow="0 8px 8px 4px rgba(0,0,0,0.2)"
          >
            <Text
              textAlign="center"
              fontSize="2xl"
              display={["none", "block", "block", "block"]}
            >
              ¿Ya viste nuestro nuevo código de ética?
            </Text>
            <Container>
              <Image
                src={CODIGO}
                maxH="30rem"
                margin="0 auto"
                _hover={{ cursor: "pointer" }}
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
    </Box>
  );
};

export default Home;
