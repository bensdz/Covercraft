import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQAccordion() {
  const faqs = [
    {
      question: "How does the cover letter generator work?",
      answer:
        "Our AI-powered tool analyzes the job description you provide and creates a tailored cover letter that highlights your relevant skills and experience. You can customize the language, format, and content before downloading.",
    },
    {
      question: "Which languages are supported?",
      answer:
        "We currently support multiple languages including English, German, French, Spanish, Italian, and Dutch. German language support is particularly robust with specialized templates and phrasing.",
    },
    {
      question: "Can I edit my generated cover letter?",
      answer:
        "Yes, you have full editing capabilities. After generation, you can modify any part of the cover letter to better match your personal style or add specific details.",
    },
    {
      question: "What file formats can I download my cover letter in?",
      answer:
        "You can download your cover letter as a PDF, Microsoft Word document (.docx), or plain text (.txt) file, depending on your subscription level.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we take data security seriously. Your personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
