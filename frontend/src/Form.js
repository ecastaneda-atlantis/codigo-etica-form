import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
//import { sleep } from "./utils/sleep";
import axios from "axios";
import Swal from "sweetalert2";

const Form = () => {
  const [form, setForm] = useState({ affair: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [serviceIsOn, setServiceIsOn] = useState(true);

  const checkServiceAvailability = async () => {
    const url = "https://appsmx.com.mx/api/test/temperatura.php/Monterrey";
    axios.get(url, {}).catch(() => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El servicio no se encuentra disponible por el momento. Inténtalo de nuevo más tarde.",
      });
      setServiceIsOn(false);
    });
  };
  // Probar que el servicio esté levantado.
  useEffect(() => {
    checkServiceAvailability();
  }, []);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const url = "http://192.168.23.247/api/service/correo/etica";
    const { affair, description } = form;
    await axios
      .post(url, { affair, description }, { timeout: 2000 })
      .then(() => {
        console.table(form);
        setForm({ affair: "", description: "" });
        Swal.fire({
          icon: "success",
          title: "Reporte enviado correctamente",
          text: "Para Grupo Atlantis la ... es muy importante. Atenderemos tu caso a la brevedad.",
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El servicio no se encuentra disponible por el momento. Inténtalo de nuevo más tarde.",
        });
      });

    setIsLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl id="email">
        <FormLabel fontWeight="bold">Asunto</FormLabel>
        <Input
          name="affair"
          type="text"
          placeholder="Asunto"
          onChange={onChange}
          value={form.affair}
          required={true}
          disabled={!serviceIsOn || isLoading}
        />
        <FormLabel fontWeight="bold" mt="2">
          Descripción
        </FormLabel>
        <Textarea
          name="description"
          placeholder="Descripción"
          onChange={onChange}
          value={form.description}
          required={true}
          disabled={!serviceIsOn || isLoading}
        />
        <FormHelperText>
          La información recopilada por este formulario es completamente
          anónima.
        </FormHelperText>
        {isLoading ? (
          <>
            <Button
              mt={4}
              isLoading
              loadingText="Enviando"
              colorScheme="teal"
              spinnerPlacement="start"
            >
              Submit
            </Button>
          </>
        ) : (
          <>
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              disabled={!serviceIsOn}
            >
              Enviar
            </Button>
          </>
        )}
      </FormControl>
    </form>
  );
};

export default Form;
