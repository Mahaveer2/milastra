import openai from "./openai";

export async function MakeImage(date){
	let image_url;
	let prompt = `Using the birthdate ${date} of individual, generate similar photos that have a consistent style and composition.`;
	const response = await openai.createImage({
		prompt:prompt,
		n: 1,
		size: "1024x1024",
	});
	image_url = response.data.data[0].url;
	return image_url;
}