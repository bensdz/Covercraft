import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col p-6 ${
        highlighted ? "bg-sky-50 border-sky-200" : "bg-white border-gray-200"
      } rounded-lg border shadow-sm ${
        highlighted ? "ring-2 ring-sky-400" : ""
      }`}
    >
      <div className="mb-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {period && (
            <span className="ml-1 text-sm text-gray-500">{period}</span>
          )}
        </div>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
      <ul className="mb-6 space-y-2 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-sky-400" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/signup" className="mt-auto">
        <Button
          variant={buttonVariant}
          className={`w-full ${
            buttonVariant === "default"
              ? "bg-sky-500 hover:bg-sky-600 text-white"
              : "border-sky-500 text-sky-600 hover:bg-sky-50"
          }`}
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
}
