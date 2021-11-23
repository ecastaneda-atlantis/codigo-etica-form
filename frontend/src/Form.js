import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";

const MAX_DESCRIPTION_LENGTH = 300;
const MAX_AFFAIR_LENGTH = 20;

const Form = () => {
  const [form, setForm] = useState({ affair: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [serviceIsOn, setServiceIsOn] = useState(true);

  const checkServiceAvailability = async () => {
    const url = "https://people-rhea.me/api/service/correo/test";
    axios.post(url, {}).catch(() => {
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
    console.table(target.name);
    const { name, value } = target;

    if (name === "description" && value.length > MAX_DESCRIPTION_LENGTH) {
      return;
    }

    if (name === "affair" && value.length > MAX_AFFAIR_LENGTH) {
      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    // Pendiente cambiar por URL final.
    const url = "https://people-rhea.me/api/service/correo/etica";
    const { affair, description } = form;
    await axios
      .post(url, { affair, description }, { timeout: 10000 })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Reporte enviado correctamente",
          text: "Agradecemos tu confianza y daremos el seguimiento a tu reporte manteniendo la confidencialidad de tu identidad.",
        });
        setForm({ affair: "", description: "" });
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
        <FormLabel fontWeight="bold">Asunto / Título</FormLabel>
        <Input
          name="affair"
          type="text"
          placeholder="Ejemplo: Incidente baño"
          onChange={onChange}
          value={form.affair}
          required={true}
          disabled={!serviceIsOn || isLoading}
        />
        <FormHelperText>
          {`Caracteres restantes: ${MAX_AFFAIR_LENGTH - form.affair.length}`}
        </FormHelperText>
        <FormLabel fontWeight="bold" mt="2">
          Descripción
        </FormLabel>
        <Textarea
          name="description"
          placeholder={`Máximo ${MAX_DESCRIPTION_LENGTH} caracteres`}
          onChange={onChange}
          value={form.description}
          required={true}
          disabled={!serviceIsOn || isLoading}
        />
        <FormHelperText>
          {`Caracteres restantes: ${
            MAX_DESCRIPTION_LENGTH - form.description.length
          }`}
        </FormHelperText>
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
              background="rgb(255,146,0)"
            >
              Enviando
            </Button>
          </>
        ) : (
          <>
            <Button
              size={"lg"}
              mt={4}
              colorScheme="teal"
              type="submit"
              disabled={!serviceIsOn}
              background="rgb(255,146,0)"
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
