"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Zod schema to validate the form input
const FormSchema = z.object({
  product: z.number()
})

const Multiplication = () => {
  const pathname: string = usePathname();
  const multiplier = pathname.split("/").filter(Boolean).pop();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<number>(0); // Track the number of attempts
  const [correctAnswers, setCorrectAnswers] = useState<number>(0); // Track correct answers

  // Function to generate a new random number between 1 and 9
  const getRandomNumber = (): number => {
    return Math.floor(Math.random() * 9) + 1;
  }

  // Generate the random number only on the client after the component mounts
  useEffect(() => {
    setRandomNumber(getRandomNumber());

    // Set focus on the input field
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])

  // React Hook Form setup with Zod resolver
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      product: undefined,
    },
  })

  // Form submit handler
  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.product === randomNumber) {
      setCorrectAnswers(correctAnswers + 1); // Increment correct answers
      toast({
        title: "Yes! That's right!",
        description: (
          <pre className="mt-2 w-[320px] text-2xl font-semibold rounded-md bg-green-500 p-4">
            <code className="text-white">{randomNumber} x {multiplier} = {randomNumber}</code>
          </pre>
        ),
      })
    } else {
      toast({
        title: "Not quite right...",
        description: (
          <pre className="mt-2 w-[320px] text-2xl font-semibold rounded-md bg-red-500 p-4">
            <code className="text-white">{randomNumber} x {multiplier} = {randomNumber}</code>
          </pre>
        ),
      })
    }

    form.reset();
    setRandomNumber(getRandomNumber());

    // Increment attempts
    setAttempts(attempts + 1);

    // Check if 10 attempts are done
    if (attempts + 1 === 10) {
      alert(`OK! You got ${correctAnswers + 1} correct answers out of 10.`);
      // Reset state for a new round
      setAttempts(0);
      setCorrectAnswers(0);
    }
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
                      value={field.value !== undefined ? field.value : ''}
                      onChange={(el) => field.onChange(Number(el.target.value) || 0)} // Fallback to 0 if input is empty
                      ref={inputRef} // Set the ref to the input field
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

export default Multiplication
