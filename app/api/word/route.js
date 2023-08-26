import { connectToDB } from "@/utils/database";
import Word from "@/models/word";

export const revalidate = 1;
export const GET = async(request)=>{
    try{
        await connectToDB();
        const words = await Word.find({});
        console.log('words:', words);
        return new Response(JSON.stringify(words), {status:200})
    } catch(error){
        return new Response('Failed to catch all words', {status:500})
    }
}