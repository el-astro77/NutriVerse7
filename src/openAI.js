import OpenAI from "openai";
const openai = new OpenAI({ apiKey: '' });
let prompt = "";

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { 
            role: "system",
            content: "You are a helpful assistant."
        },
        {
            role: "user",
            content: prompt,
        },
    ],
});

console.log(completion.choices[0].message.content);