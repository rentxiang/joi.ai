import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import ChatClient from "./components/client";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

interface ChatIdPageProps {
    params: {
        chatId:string;
    }
}



const ChatIdPage = async ({
    params
}:ChatIdPageProps) => {
    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription();
    const {userId} = auth();
    if(!userId){
        return redirectToSignIn();
    }
    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.chatId
        },
        include: {
            messages: {
                orderBy: {
                    createdAt: "asc",
                },
                where: {
                    userId,
                }
            },
            _count: {
                select: {
                    messages: true 
                }
            }
        }
    });


    if (!companion) {
        return redirect("/home");
    }
    return ( 
            <ChatClient companion={companion} apiLimitCount={apiLimitCount} isPro={isPro}/>
     );
}
 
export default ChatIdPage;