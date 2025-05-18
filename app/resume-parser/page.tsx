"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Upload,
  Check,
  X,
  FileUp,
  User,
  Briefcase,
  GraduationCap,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ResumeParserPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("upload");

  // Simulated parsed resume data
  const [parsedData, setParsedData] = useState({
    personalInfo: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+49 123 456 7890",
      address: "Musterstraße 123, 10115 Berlin, Germany",
      title: "Senior Software Engineer",
    },
    experience: [
      {
        company: "Tech Solutions GmbH",
        position: "Senior Software Engineer",
        duration: "Jan 2020 - Present",
        description:
          "Led development of cloud-based applications using React and Node.js. Implemented CI/CD pipelines and improved system performance by 40%.",
      },
      {
        company: "Digital Innovations AG",
        position: "Software Developer",
        duration: "Mar 2017 - Dec 2019",
        description:
          "Developed and maintained web applications using Angular and Spring Boot. Collaborated with UX designers to implement responsive interfaces.",
      },
    ],
    education: [
      {
        institution: "Technical University of Berlin",
        degree: "Master of Science in Computer Science",
        duration: "2015 - 2017",
      },
      {
        institution: "University of Hamburg",
        degree: "Bachelor of Science in Computer Science",
        duration: "2011 - 2015",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "Agile Methodologies",
    ],
  });

  const handleFileUpload = () => {
    setIsUploading(true);

    // Simulate file upload
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setIsProcessing(true);

      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
        setActiveTab("review");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href="/generator">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <FileText className="h-6 w-6 text-sky-400" />
            <span className="text-xl font-bold">BewerbungsGenie</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              className="bg-sky-400 hover:bg-sky-500 text-white"
              disabled={activeTab !== "review"}
            >
              Save Profile
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Resume Parser</h1>
          <p className="text-gray-500">
            Upload your resume to automatically extract your information
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="review" disabled={!uploadSuccess}>
              Review & Edit
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Upload Your Resume</CardTitle>
                <CardDescription>
                  We'll extract information from your resume to personalize your
                  cover letters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center cursor-pointer hover:border-sky-200 transition-colors"
                  onClick={handleFileUpload}
                >
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="p-4 bg-sky-50 rounded-full">
                      <FileUp className="h-8 w-8 text-sky-400" />
                    </div>
                    <div className="text-lg font-medium">
                      Drag and drop your resume or click to browse
                    </div>
                    <div className="text-sm text-gray-500">
                      Supports PDF, DOCX, and TXT formats (Max 5MB)
                    </div>
                    <Button className="bg-sky-400 hover:bg-sky-500 text-white mt-2">
                      {isUploading ? (
                        <>
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="mr-2 h-4 w-4" />
                          Select File
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {uploadSuccess && (
                  <div className="mt-6">
                    <Alert className="bg-green-50 border-green-200">
                      <Check className="h-4 w-4 text-green-600" />
                      <AlertTitle className="text-green-800">
                        Upload Successful
                      </AlertTitle>
                      <AlertDescription className="text-green-700">
                        {isProcessing ? (
                          <div className="flex items-center">
                            <div className="animate-spin mr-2 h-4 w-4 border-2 border-sky-400 border-t-transparent rounded-full" />
                            Processing your resume...
                          </div>
                        ) : (
                          "Your resume has been processed successfully. Please review the extracted information."
                        )}
                      </AlertDescription>
                    </Alert>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-gray-500">
                  Your data is processed securely and never shared with third
                  parties.
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="review">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center">
                    <div className="mr-4 p-2 bg-sky-100 rounded-full">
                      <User className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>
                        Review and edit your personal details
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          defaultValue={parsedData.personalInfo.name}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Professional Title</Label>
                        <Input
                          id="title"
                          defaultValue={parsedData.personalInfo.title}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue={parsedData.personalInfo.email}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          defaultValue={parsedData.personalInfo.phone}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        defaultValue={parsedData.personalInfo.address}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center">
                    <div className="mr-4 p-2 bg-sky-100 rounded-full">
                      <Briefcase className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <CardTitle>Work Experience</CardTitle>
                      <CardDescription>
                        Review and edit your professional experience
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {parsedData.experience.map((exp, index) => (
                      <div
                        key={index}
                        className="p-4 border rounded-lg space-y-3"
                      >
                        <div className="flex justify-between">
                          <div className="font-medium">{exp.position}</div>
                          <div className="text-sm text-gray-500">
                            {exp.duration}
                          </div>
                        </div>
                        <div className="text-sm">{exp.company}</div>
                        <div className="text-sm text-gray-600">
                          {exp.description}
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500"
                          >
                            <X className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Experience
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center">
                    <div className="mr-4 p-2 bg-sky-100 rounded-full">
                      <GraduationCap className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <CardTitle>Education</CardTitle>
                      <CardDescription>
                        Review and edit your educational background
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {parsedData.education.map((edu, index) => (
                      <div
                        key={index}
                        className="p-4 border rounded-lg space-y-3"
                      >
                        <div className="flex justify-between">
                          <div className="font-medium">{edu.degree}</div>
                          <div className="text-sm text-gray-500">
                            {edu.duration}
                          </div>
                        </div>
                        <div className="text-sm">{edu.institution}</div>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500"
                          >
                            <X className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Education
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>
                      Review and edit your skills
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {parsedData.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm flex items-center"
                        >
                          {skill}
                          <button className="ml-2 text-sky-400 hover:text-sky-600">
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-skill">Add Skill</Label>
                      <div className="flex gap-2">
                        <Input id="new-skill" placeholder="Enter a skill" />
                        <Button variant="outline">Add</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Resume Summary</CardTitle>
                    <CardDescription>
                      A brief summary of your qualifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      className="min-h-[150px]"
                      placeholder="Experienced software engineer with expertise in web development and cloud technologies..."
                      defaultValue="Experienced software engineer with over 5 years of expertise in full-stack development. Proficient in JavaScript, TypeScript, React, and Node.js with a strong background in cloud technologies and CI/CD practices. Passionate about creating efficient, scalable, and user-friendly applications."
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Actions</CardTitle>
                    <CardDescription>
                      Save or update your profile
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full bg-sky-400 hover:bg-sky-500 text-white">
                      Save Profile
                    </Button>
                    <Button className="w-full" variant="outline">
                      Update Resume
                    </Button>
                    <Link href="/generator" className="block w-full">
                      <Button className="w-full" variant="outline">
                        Return to Generator
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
