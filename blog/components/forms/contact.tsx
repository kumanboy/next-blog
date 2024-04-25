'use client'
import {useForm} from "react-hook-form";
import {contactSchema} from "@/lib/validation";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Send} from "lucide-react";
import {toast} from "sonner";
import {useState} from "react";

function ContactForm() {
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            email: "",
            message: "",
            name: ""
        },
    })

    function onSubmit(values: z.infer<typeof contactSchema>) {
        setIsLoading(true)
        const tgBotId = process.env.NEXT_TELEGRAM_BOT_API
        const tgBotChatId = process.env.NEXT_TELEGRAM_CHAT_ID

        const promise = fetch(`https://api.telegram.org/bot${tgBotId}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache",
                "mode": 'no-cors',

            },
            body: JSON.stringify({
                chatId: tgBotChatId,
                text: `Name: ${values.name}:
				Email: ${values.email}:
				Message: ${values.message}
				`
            }),
        }
        )
            .then(()=> form.reset())
            .finally(() => setIsLoading(false))
        toast.promise(promise, {
            loading: 'Loading...',
            success: 'Successfully sent!',
            error: 'Something went wrong',
        })

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
                <FormField
                    control={form.control}
                    name='message'
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    disabled={isLoading}
                                    className='resize-none h-32'
                                    placeholder='Ask question or just say Hi'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='email'
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    disabled={isLoading}
                                    placeholder='Email address'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='name'
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder='Your name here'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button
                    className='w-fit'
                    size={'lg'}
                    type='submit'
                >
                    <span>Send</span>
                    <Send className='w-4 h-4 ml-2'/>
                </Button>
            </form>
        </Form>
    )
}

export default ContactForm
