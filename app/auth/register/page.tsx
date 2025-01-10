"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import axios from "axios";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("/api/influencers/add", {
        name,
        email,
        password,
      });

      setLoading(false);

      if (res?.statusText != "OK") {
        setError("Failed to register. Please try again.");
      } else {
        router.push("/auth/login");
      }
    } catch (err) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center text-lg font-bold">
            Create an Account
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                {error}
              </Alert>
            )}
            <div className="space-y-4">
              <Input
                id="name"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Register
            </Button>
            <div className="flex items-center justify-center">
              <span className="text-gray-500">Already have an account?</span>
              <p
                onClick={() => router.push("/auth/login")}
                className="text-blue-500 ml-2 cursor-pointer"
              >
                Login
              </p>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
