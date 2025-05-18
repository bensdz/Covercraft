"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Save, Play, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TemplatesPage() {
  const [templateName, setTemplateName] = useState("My Custom Template");
  const [templateType, setTemplateType] = useState("latex");
  const [latexCode, setLatexCode] = useState(`\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage[margin=1in]{geometry}
\\usepackage{hyperref}

\\begin{document}
\\begin{flushright}
\\textbf{[Your Name]}\\\\
[Your Address]\\\\
[Your Phone]\\\\
[Your Email]
\\end{flushright}

\\vspace{1cm}

[Date]\\\\
\\\\
[Recipient Name]\\\\
[Company Name]\\\\
[Company Address]\\\\
\\\\
\\textbf{Re: [Position Title]}\\\\
\\\\
Dear [Recipient],\\\\
\\\\
[Cover Letter Content]\\\\
\\\\
Sincerely,\\\\
\\\\
\\\\
\\\\
[Your Name]
\\end{document}`);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href="/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <FileText className="h-6 w-6 text-sky-400" />
            <span className="text-xl font-bold">BewerbungsGenie</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-sm">
              <Save className="mr-2 h-4 w-4" />
              Save Template
            </Button>
            <Button className="bg-sky-400 hover:bg-sky-500 text-white">
              <Play className="mr-2 h-4 w-4" />
              Test Template
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Template Editor</h1>
          <p className="text-gray-500">
            Create and manage your custom templates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Template Code</CardTitle>
                <CardDescription>
                  Write your custom LaTeX code for PDF generation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  className="font-mono text-sm min-h-[500px]"
                  value={latexCode}
                  onChange={(e) => setLatexCode(e.target.value)}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Reset to Default</Button>
                <Button className="bg-sky-400 hover:bg-sky-500 text-white">
                  <Play className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Template Settings</CardTitle>
                <CardDescription>
                  Configure your template properties
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="template-name">Template Name</Label>
                  <Input
                    id="template-name"
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template-type">Template Type</Label>
                  <Select value={templateType} onValueChange={setTemplateType}>
                    <SelectTrigger id="template-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="latex">LaTeX</SelectItem>
                      <SelectItem value="html">HTML</SelectItem>
                      <SelectItem value="markdown">Markdown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template-category">Category</Label>
                  <Select defaultValue="professional">
                    <SelectTrigger id="template-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Template Variables</CardTitle>
                <CardDescription>
                  Available variables for your template
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-2 bg-gray-100 rounded font-mono">
                    [Your Name]
                  </div>
                  <div className="p-2 bg-gray-100 rounded font-mono">
                    [Your Address]
                  </div>
                  <div className="p-2 bg-gray-100 rounded font-mono">
                    [Your Phone]
                  </div>
                  <div className="p-2 bg-gray-100 rounded font-mono">
                    [Your Email]
                  </div>
                  <div className="p-2 bg-gray-100 rounded font-mono">
                    [Date]
                  </div>
                  <div className="p-2 bg-gray-100 rounded font-mono">
                    [Recipient Name]
                  </div>
                  <div className="p-2 bg-gray-100 rounded font-mono">
                    [Company Name]
                  </div>
                  <div className="p-2 bg-gray-100 rounded font-mono">
                    [Company Address]
                  </div>
                  <div className="p-2 bg-gray-100 rounded font-mono">
                    [Position Title]
                  </div>
                  <div className="p-2 bg-gray-100 rounded font-mono">
                    [Cover Letter Content]
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  These variables will be automatically replaced with the
                  corresponding information when generating your cover letter.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
                <CardDescription>Manage your template</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-sky-400 hover:bg-sky-500 text-white">
                  <Save className="mr-2 h-4 w-4" />
                  Save Template
                </Button>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Template
                </Button>
                <Button className="w-full" variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Template
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
