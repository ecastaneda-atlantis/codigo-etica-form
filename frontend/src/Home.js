import { Text } from "@chakra-ui/react";
import React from "react";
import { Stack, Image } from "@chakra-ui/react";
import Form from "./Form";
import logo from "./assets/logo.png";
const Home = () => {
  return (
    <Stack spacing={3} mt={3}>
      <Image src={logo} />
      <Text textAlign="center" fontSize="2xl" fontWeight="bold">
        Código de Ética
      </Text>
      <Text textAlign="left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut arcu
        odio. Morbi ut efficitur ante. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Suspendisse
        fermentum diam elit, in pretium nibh viverra vitae. Maecenas sed feugiat
        leo. Donec pretium leo ut purus malesuada vestibulum. Integer quis leo
        et arcu luctus sollicitudin. Nullam tincidunt blandit egestas. Duis
        dignissim felis ut rutrum ornare.
      </Text>
      <Text fontWeight="bold" fontStyle="italic">
        Introduce los datos de tu reporte:
      </Text>
      <Form />
    </Stack>
  );
};

export default Home;
