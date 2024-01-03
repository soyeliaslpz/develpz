import { setExample } from "./slice/exampleSlice";

// Cargar datos en el state de " example " en redux
export const getExample = (datos) => {
  return async (dispatch) => {
    dispatch(setExample(datos));
  };
};
