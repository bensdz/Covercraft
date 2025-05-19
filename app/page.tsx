"use client";
import Link from "next/link";
import { ArrowRight, FileText, Globe, Settings, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroImage from "@/components/hero-image";
import FeatureCard from "@/components/feature-card";
import TestimonialCard from "@/components/testimonial-card";
import PricingCard from "@/components/pricing-card";
import FAQAccordion from "@/components/faq-accordion";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-sky-400" />
            <span className="text-xl font-bold">CoverCraft</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-sky-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#features"
              className="text-sm font-medium hover:text-sky-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium hover:text-sky-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium hover:text-sky-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("faq")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-sm">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-sky-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600 mb-2">
                  Professional Cover Letters in Minutes
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Craft the Perfect Cover Letter for Your Dream Job
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Generate personalized, professional cover letters in multiple
                  languages with our AI-powered tool. Stand out from the
                  competition and land more interviews.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/generator">
                    <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                      Create Your Cover Letter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/examples">
                    <Button
                      variant="outline"
                      className="border-sky-200 text-sky-600 hover:bg-sky-50"
                    >
                      View Examples
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <HeroImage />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Everything You Need to Create Winning Cover Letters
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform combines powerful AI with user-friendly design to
                  help you create tailored cover letters for any job
                  application.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <FeatureCard
                icon={<Sparkles className="h-10 w-10 text-sky-400" />}
                title="AI-Powered Generation"
                description="Our advanced AI analyzes job descriptions to create tailored cover letters that highlight your relevant skills and experience."
              />
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-sky-400" />}
                title="Multi-Language Support"
                description="Generate cover letters in multiple languages, with specialized support for German and other major languages."
              />
              <FeatureCard
                icon={<FileText className="h-10 w-10 text-sky-400" />}
                title="Industry Templates"
                description="Choose from dozens of professionally designed templates optimized for different industries and job types."
              />
              <FeatureCard
                icon={<Settings className="h-10 w-10 text-sky-400" />}
                title="Customization Options"
                description="Fine-tune your cover letter with easy editing tools, formatting options, and personalization features."
              />
              <FeatureCard
                icon={<FileText className="h-10 w-10 text-sky-400" />}
                title="Multiple Export Formats"
                description="Download your cover letter as PDF, Word document, or plain text to suit any application requirement."
              />
              <FeatureCard
                icon={<Settings className="h-10 w-10 text-sky-400" />}
                title="Profile Storage"
                description="Save your resume details and preferences for faster generation of future cover letters."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">
                  Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  How It Works
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create your perfect cover letter in just three simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold">Paste Job Description</h3>
                <p className="mt-2 text-gray-500">
                  Copy and paste the job description from any listing into our
                  tool.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold">Select Your Preferences</h3>
                <p className="mt-2 text-gray-500">
                  Choose your language, template, and customize your personal
                  details.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold">Generate & Download</h3>
                <p className="mt-2 text-gray-500">
                  Review your personalized cover letter, make any edits, and
                  download in your preferred format.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What Our Users Say
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of job seekers who have successfully landed
                  interviews with our cover letters
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <TestimonialCard
                quote="I landed three interviews in a week after using CoverCraft. The AI perfectly highlighted my relevant skills for each position."
                author="Sarah K."
                role="Marketing Professional"
              />
              <TestimonialCard
                quote="As a non-native English speaker, this tool was a lifesaver. It helped me create flawless cover letters that impressed recruiters."
                author="Thomas M."
                role="Software Engineer"
              />
              <TestimonialCard
                quote="The German language support is excellent. I applied for jobs in Berlin and received compliments on my professional cover letters."
                author="Julia R."
                role="Project Manager"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 bg-gray-50" id="pricing">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for your job search needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <PricingCard
                title="Basic"
                price="Free"
                description="Perfect for occasional job applications"
                features={[
                  "3 cover letters per month",
                  "Basic templates",
                  "PDF export",
                  "English language only",
                ]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              <PricingCard
                title="Professional"
                price="$9.99"
                period="per month"
                description="Ideal for active job seekers"
                features={[
                  "Unlimited cover letters",
                  "All templates",
                  "All export formats",
                  "Multi-language support",
                  "Profile storage",
                ]}
                buttonText="Subscribe Now"
                buttonVariant="default"
                highlighted={true}
              />
              <PricingCard
                title="Enterprise"
                price="$49.99"
                period="per month"
                description="For teams and recruitment agencies"
                features={[
                  "Everything in Professional",
                  "Team management",
                  "API access",
                  "Custom templates",
                  "Priority support",
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24" id="faq">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our cover letter
                  generator
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-sky-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Land Your Dream Job?
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create your first professional cover letter in minutes. No
                  credit card required to get started.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                    Create Free Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/generator">
                  <Button
                    variant="outline"
                    className="border-sky-200 text-sky-600 hover:bg-sky-50"
                  >
                    Try Generator
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-sky-400" />
            <span className="text-lg font-semibold">CoverCraft</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            © 2025 CoverCraft. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
