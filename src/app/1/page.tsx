"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Zod schema to validate the form input
const FormSchema = z.object({
  product: z.union([
    z.number(),
    z.null()
  ])
})

const One = () => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null)

  // Generate the random number only on the client after the component mounts
  useEffect(() => {
    const getRandomNumber = (): number => {
      return Math.floor(Math.random() * 9) + 1
    }
    setRandomNumber(getRandomNumber())
  }, [])

  // React Hook Form setup with Zod resolver
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      product: null, // Start with null to keep the input empty
    },
  })

  // Form submit handler
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Yes! That's right!",
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3 space-y-6">
          <FormField
            control={form.control}
            name="product"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-row items-center gap-4">
                    {randomNumber !== null && (
                      <span className="text-6xl text-nowrap">{randomNumber} x 1 =</span>
                    )}

                    <Input
                      {...field}
                      className="text-6xl w-[90px] h-auto"
                      // Handle empty field by allowing empty string and converting valid input to number
                      value={field.value !== null ? field.value : ''}
                      onChange={(el) => field.onChange(el.target.value ? Number(el.target.value) : null)} // Use null for empty input
                    />

                    <Button
                      className="bg-green-500 hover:bg-green-400 hover:border hover:border-green-800 w-[90px] min-h-20"
                      type="submit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499" />
                      </svg>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}

export default One
