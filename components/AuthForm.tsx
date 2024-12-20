'use client'

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from "./CustomInput"
import { authFormSchema } from "@/lib/utils"
import { demoUser } from "@/lib/demoData"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  const formSchema = authFormSchema(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async () => {
    try {
      // Instead of showing a dialog, show a toast
      toast.error("This feature is unavailable in the demo version. Please use the Live Demo!");
    } catch (error) {
      console.log(error)
    }
  }

  const handleDemoLogin = () => {
    Cookies.set("user", JSON.stringify(demoUser), { expires: 7 })
    setUser(demoUser), 
    router.push("/")
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-3">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="QuantumPay logo"
          />
          <h1 className="text-26 font-sans font-bold text-black-1">
            QuantumPay
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {type === "sign-up" && (
            <>
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="firstName"
                  label="First Name"
                  placeholder="Enter your first name"
                />
                <CustomInput
                  control={form.control}
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter your first name"
                />
              </div>
              <CustomInput
                control={form.control}
                name="address1"
                label="Address"
                placeholder="Enter your specific address"
              />
              <CustomInput
                control={form.control}
                name="city"
                label="City"
                placeholder="Enter your city"
              />
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="state"
                  label="State"
                  placeholder="Example: NY"
                />
                <CustomInput
                  control={form.control}
                  name="postalCode"
                  label="Postal Code"
                  placeholder="Example: 11101"
                />
              </div>
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="dateOfBirth"
                  label="Date of Birth"
                  placeholder="YYYY-MM-DD"
                />
                <CustomInput
                  control={form.control}
                  name="ssn"
                  label="SSN"
                  placeholder="Example: 1234"
                />
              </div>
            </>
          )}

          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />

          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
          />

          <div className="flex flex-col gap-4">
            <Button type="submit" className="form-btn">
              {type === "sign-in" ? "Sign In" : "Sign Up"}
            </Button>
          </div>
        </form>
      </Form>
      <Button type="submit" onClick={handleDemoLogin} className="demo-btn">
        Live Demo
      </Button>

      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === "sign-in"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <Link
          href={type === "sign-in" ? "/sign-up" : "/sign-in"}
          className="form-link"
        >
          {type === "sign-in" ? "Sign up" : "Sign in"}
        </Link>
      </footer>

      {/* Toast container to render toast notifications */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar  style={{ width: '450px' }}/>
    </section>
  )
}

export default AuthForm
