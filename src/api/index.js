import axios from "axios";

const adviceApi = "https://api.adviceslip.com/advice";

const instance = axios.create({
  baseURL: adviceApi,
  timeout: 5000,
});

const getAdvice = async () => {
  try {
    const response = await instance.get();
    const { advice } = response.data.slip;

    return advice;
  } catch (error) {
    throw new Error(`Unable to fetch advice: ${error.message}`);
  }
};

export default getAdvice;
