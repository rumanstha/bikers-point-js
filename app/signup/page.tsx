import React from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Image from "next/image";

const SignUP = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full max-w-4xl">
        {/* Image Section */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/Capture6.PNG"
            alt="Sign up"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Sign Up Card */}

        <div className="w-full md:w-1/2  justify-center items-center">
          <img src="/favicon.ico" alt="fav" className="w-10 h-10" />
          <Card className="w-full max-w-lg">
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>

                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@gmail.com"
                  required
                />
                <br />
                <div className="flex g-3">
                  <TextInput
                    id="name1"
                    type="Name"
                    placeholder="First name"
                    required
                  />
                  <TextInput
                    id="name2"
                    type="Name"
                    placeholder="Last name"
                    required
                  />
                </div>
                <br />
                <TextInput
                  id="number1"
                  type="number"
                  placeholder="Enter your number"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Create Your password" />
                </div>
                <TextInput id="password1" type="password" required />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="large" value="why you Choose us?" />
                </div>
                <TextInput id="large" type="text" sizing="lg" />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button type="submit" gradientDuoTone="purpleToPink">
                Sign up
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
