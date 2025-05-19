import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {
  FileText,
  Plus,
  Download,
  Edit,
  Trash2,
  Search,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  // Sample data for demonstration
  const recentLetters = [
    {
      id: 1,
      title: "Software Engineer - TechCorp",
      date: "May 1, 2025",
      language: "German",
      status: "completed",
    },
    {
      id: 2,
      title: "Product Manager - InnovateCo",
      date: "April 28, 2025",
      language: "English",
      status: "completed",
    },
    {
      id: 3,
      title: "Marketing Specialist - BrandX",
      date: "April 25, 2025",
      language: "German",
      status: "draft",
    },
    {
      id: 4,
      title: "Data Analyst - AnalyticsFirm",
      date: "April 20, 2025",
      language: "German",
      status: "completed",
    },
    {
      id: 5,
      title: "UX Designer - DesignStudio",
      date: "April 15, 2025",
      language: "English",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-sky-400" />
            <span className="text-xl font-bold">CoverCraft</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/profile">
              <Button variant="ghost" className="text-sm">
                Profile
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="ghost" className="text-sm">
                Settings
              </Button>
            </Link>
            <Button variant="outline" className="text-sm">
              Log out
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-500">Manage your cover letters</p>
          </div>
          <Link href="/generator">
            <Button className="bg-sky-400 hover:bg-sky-500 text-white">
              <Plus className="mr-2 h-4 w-4" />
              New Cover Letter
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Cover Letters
              </CardTitle>
              <FileText className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-gray-500">+3 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                German Letters
              </CardTitle>
              <Globe className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-gray-500">66% of total</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Downloads</CardTitle>
              <Download className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-gray-500">+5 this week</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Cover Letters</h2>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search cover letters..." className="pl-8" />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Language</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentLetters.map((letter) => (
                <TableRow key={letter.id}>
                  <TableCell className="font-medium">{letter.title}</TableCell>
                  <TableCell>{letter.date}</TableCell>
                  <TableCell>{letter.language}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        letter.status === "completed" ? "default" : "outline"
                      }
                      className={
                        letter.status === "completed"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : ""
                      }
                    >
                      {letter.status === "completed" ? "Completed" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                          </svg>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-center mt-6">
            <Button variant="outline" className="text-sm">
              View All Cover Letters
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">My Templates</h2>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Template
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 hover:border-sky-400 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium">Professional LaTeX</h3>
                  <p className="text-xs text-gray-500">Default template</p>
                </div>
                <Badge>LaTeX</Badge>
              </div>
              <div className="bg-gray-50 rounded p-2 text-xs font-mono mb-3 h-20 overflow-hidden">
                {`\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage[margin=1in]{geometry}
...`}
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="border rounded-lg p-4 hover:border-sky-400 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium">Academic Style</h3>
                  <p className="text-xs text-gray-500">
                    For research positions
                  </p>
                </div>
                <Badge>LaTeX</Badge>
              </div>
              <div className="bg-gray-50 rounded p-2 text-xs font-mono mb-3 h-20 overflow-hidden">
                {`\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{hyperref}
...`}
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="border rounded-lg p-4 border-dashed flex items-center justify-center text-gray-400 hover:text-sky-500 hover:border-sky-400 transition-colors cursor-pointer">
              <Plus className="h-6 w-6 mr-2" />
              <span>Add New Template</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Templates</CardTitle>
              <CardDescription>
                Choose from our professional templates
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {["Professional", "Creative", "Modern", "Traditional"].map(
                (template) => (
                  <div
                    key={template}
                    className="border rounded-md p-4 text-center hover:border-sky-400 hover:bg-sky-50 cursor-pointer transition-colors"
                  >
                    <FileText className="h-8 w-8 mx-auto mb-2 text-sky-400" />
                    <p className="font-medium">{template}</p>
                  </div>
                )
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Browse All Templates
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Tips</CardTitle>
              <CardDescription>
                Improve your cover letters with these tips
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-sky-100 p-2 rounded-full">
                  <span className="text-sky-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium">Tailor to the Job</h3>
                  <p className="text-sm text-gray-500">
                    Customize each cover letter for the specific position.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-sky-100 p-2 rounded-full">
                  <span className="text-sky-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium">Highlight Achievements</h3>
                  <p className="text-sm text-gray-500">
                    Focus on specific accomplishments rather than just
                    responsibilities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-sky-100 p-2 rounded-full">
                  <span className="text-sky-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium">Keep It Concise</h3>
                  <p className="text-sm text-gray-500">
                    Aim for a one-page cover letter with clear, concise
                    language.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Tips
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
