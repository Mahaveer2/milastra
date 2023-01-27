import { OpenAIApi,Configuration } from 'openai';

const configuration = new Configuration({
  apiKey:import.meta.env.VITE_OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);
export default openai;