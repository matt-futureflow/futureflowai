import { Check, Shield, ShieldCheck, X, XCircle } from "lucide-react";
import Image from "next/image";

export default function AiAssistant() {
  return (
    <div className="w-full  px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-4 w-fit rounded-full bg-green-100 px-8 py-2">
          <p className="text-center text-lg font-medium text-green-600">
            Why Use The FutureFlow System
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="mb-28 text-center text-3xl font-bold leading-tight text-white md:text-4xl lg:mx-auto lg:max-w-4xl">
          Offload repetitive tasks to AI Agents. Cut down wait times and solve
          problems fast.
        </h1>
      </div>
    </div>
  );
}
