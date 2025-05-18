"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  Download,
  Copy,
  ArrowLeft,
  Check,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export default function GeneratorPage() {
  const router = useRouter();
  const [jobDescription, setJobDescription] = useState("");
  const [language, setLanguage] = useState("german");
  const [template, setTemplate] = useState("professional");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("input");

  const handleGenerate = () => {
    if (!jobDescription) return;

    setIsGenerating(true);

    // Simulate API call with timeout
    setTimeout(() => {
      const sampleLetter = `
Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihre Stellenanzeige für die Position als [Position] gelesen und möchte mich hiermit bewerben.

Meine Erfahrung im Bereich [relevanter Bereich] sowie meine Fähigkeiten in [relevante Fähigkeiten] machen mich zu einem idealen Kandidaten für diese Position. In meiner aktuellen Rolle als [aktuelle Position] bei [aktuelles Unternehmen] konnte ich bereits erfolgreich [relevante Erfolge] umsetzen.

Besonders reizt mich an der ausgeschriebenen Stelle die Möglichkeit, [spezifischer Aspekt der Stelle]. Meine Stärken in [relevante Stärken] würden mir helfen, einen wertvollen Beitrag zu Ihrem Team zu leisten.

Ich freue mich auf die Gelegenheit, meine Bewerbung in einem persönlichen Gespräch zu vertiefen.

Mit freundlichen Grüßen,
[Ihr Name]
      `;

      setGeneratedLetter(sampleLetter);
      setIsGenerating(false);
      setActiveTab("preview");
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/")}
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <FileText className="h-6 w-6 text-sky-400" />
            <span className="text-xl font-bold">BewerbungsGenie</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm">
              Save
            </Button>
            <Button className="bg-sky-400 hover:bg-sky-500 text-white">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Cover Letter Generator</h1>
          <p className="text-gray-500">
            Create a personalized cover letter in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="input">Input</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="input" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Description</CardTitle>
                    <CardDescription>
                      Paste the job description to generate a tailored cover
                      letter
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Paste job description here..."
                      className="min-h-[200px]"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Upload your resume or enter details manually
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="upload" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="upload">Upload Resume</TabsTrigger>
                        <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                      </TabsList>
                      <TabsContent value="upload" className="space-y-4">
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                          <div className="flex flex-col items-center justify-center space-y-2">
                            <FileText className="h-8 w-8 text-gray-400" />
                            <div className="text-sm font-medium">
                              Drag and drop your resume or click to browse
                            </div>
                            <div className="text-xs text-gray-500">
                              Supports PDF, DOCX, and TXT formats (Max 5MB)
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-2"
                            >
                              Browse Files
                            </Button>
                          </div>
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.docx,.doc,.txt"
                            id="resume-upload"
                          />
                        </div>
                        <div className="text-sm text-gray-500">
                          We'll extract your information to personalize your
                          cover letter. You can edit any details after upload.
                        </div>
                      </TabsContent>
                      <TabsContent value="manual" className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="John" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Doe" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john.doe@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" placeholder="+1 (555) 123-4567" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="currentRole">Current Role</Label>
                          <Input
                            id="currentRole"
                            placeholder="Software Engineer"
                          />
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <Button
                  className="w-full bg-sky-400 hover:bg-sky-500 text-white"
                  onClick={handleGenerate}
                  disabled={!jobDescription || isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Cover Letter"
                  )}
                </Button>
              </TabsContent>

              <TabsContent value="preview">
                {generatedLetter ? (
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Your Cover Letter</CardTitle>
                        <CardDescription>
                          Preview and edit your generated cover letter
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={copyToClipboard}
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        className="min-h-[500px] font-serif"
                        value={generatedLetter}
                        onChange={(e) => setGeneratedLetter(e.target.value)}
                      />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => setActiveTab("input")}
                      >
                        Back to Input
                      </Button>
                      <Button className="bg-sky-400 hover:bg-sky-500 text-white">
                        <Download className="mr-2 h-4 w-4" />
                        Download as PDF
                      </Button>
                    </CardFooter>
                  </Card>
                ) : (
                  <div className="flex flex-col items-center justify-center p-12 text-center">
                    <FileText className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium mb-2">
                      No Cover Letter Generated Yet
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Fill in the job description and your details, then
                      generate your cover letter
                    </p>
                    <Button
                      onClick={() => setActiveTab("input")}
                      className="bg-sky-400 hover:bg-sky-500 text-white"
                    >
                      Go to Input
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  Customize your cover letter options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="italian">Italian</SelectItem>
                      <SelectItem value="dutch">Dutch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template">Template Style</Label>
                  <Select value={template} onValueChange={setTemplate}>
                    <SelectTrigger id="template">
                      <SelectValue placeholder="Select template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tone">Tone</Label>
                  <Select defaultValue="confident">
                    <SelectTrigger id="tone">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="confident">Confident</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="length">Letter Length</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger id="length">
                      <SelectValue placeholder="Select length" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short (250 words)</SelectItem>
                      <SelectItem value="medium">Medium (350 words)</SelectItem>
                      <SelectItem value="long">Long (450+ words)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>LaTeX Template</CardTitle>
                <CardDescription>
                  Use custom LaTeX for PDF generation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="use-latex" />
                  <Label htmlFor="use-latex">Use custom LaTeX template</Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="latex-template">LaTeX Code</Label>
                  <Textarea
                    id="latex-template"
                    className="font-mono text-sm h-[200px]"
                    placeholder="\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}

\begin{document}
\begin{flushright}
\textbf{[Your Name]}\\
[Your Address]\\
[Your Phone]\\
[Your Email]
\end{flushright}

\vspace{1cm}

[Date]\\
\\
[Recipient Name]\\
[Company Name]\\
[Company Address]\\
\\
\textbf{Re: [Position Title]}\\
\\
Dear [Recipient],\\
\\
[Cover Letter Content]\\
\\
Sincerely,\\
\\
\\
\\
[Your Name]
\end{document}"
                  />
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Reset to Default
                  </Button>
                  <Button variant="outline" size="sm">
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
                <CardDescription>Choose your preferred format</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-sky-400 hover:bg-sky-500 text-white"
                  disabled={!generatedLetter}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download as PDF
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  disabled={!generatedLetter}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download as DOCX
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  disabled={!generatedLetter}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download as TXT
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
