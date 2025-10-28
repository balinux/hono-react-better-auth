import { createFileRoute } from '@tanstack/react-router'
import { hc } from "hono/client";
import { useQuery } from "@tanstack/react-query";
import { CircleX } from 'lucide-react';
import type { AppType } from "../../../server"

const client = hc<AppType>('/')

export const Route = createFileRoute('/todos')({
    component: RouteComponent,
})

function RouteComponent() {
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const resp = await client.api.todos.$get()
            if (!resp.ok) throw new Error('Failed to fetch todos');
            return resp.json()
        },
    })
    
    // handle isLoading
    if (isLoading) {
        return (
            <div className='flex flex-col items-center p-10'>
                <div className=' space-y-3'>
                    {[1,2,3,4,5].map((i) => (
                        <div key={i} className='flex items-center gap-2'>
                            <div className='skeleton h-6 w-6'></div>
                            <div className='skeleton h-6 w-6 rounded-full'></div>
                            <div className='skeleton h-4 w-32'></div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className=' flex flex-row justify-center w-full items-center mt-10 '>
                <div role='alert' className='alert alert-error space-y-3 max-w-md items-center justify-center'>
                    <CircleX className='w-6 h-6' />
                    <span>{error.message}</span>
                </div>
            </div>
        )
    }

    return (
        <div className='flex flex-col items-center p-10'>
            <div className=' space-y-3'>
                {data && data.map((todo) => (
                    <div key={todo.id} className='flex items-center gap-2'>
                        <input type="checkbox" className='checkbox checkbox-primary' />
                        <span>{todo.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
