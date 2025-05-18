const latexTemplates = [
  {
    id: "en-modern",
    name: "Modern English Cover Letter",
    language: "English",
    template: `
    \\documentclass[11pt,a4paper]{letter}
    \\usepackage{geometry}
    \\geometry{left=1in,right=1in,top=1in,bottom=1in}
    \\usepackage{fontspec}
    \\setmainfont{Arial}
    \\usepackage{xcolor}
    \\usepackage{hyperref}
    \\hypersetup{colorlinks=true,urlcolor=blue}

    \\begin{document}
    \\begin{letter}{{{companyName}}\\\\{{companyAddress}}}

    \\opening{Dear {{recipientName}},}

    {{letterContent}}

    \\closing{Sincerely,}

    \\vspace{1cm}
    {{applicantName}}\\\\
    {{applicantEmail}}\\\\
    {{applicantPhone}}

    \\end{letter}
    \\end{document}
    `,
  },
  {
    id: "fr-elegant",
    name: "Lettre de Motivation Élégante",
    language: "French",
    template: `
    \\documentclass[11pt,a4paper]{letter}
    \\usepackage[utf8]{inputenc}
    \\usepackage[T1]{fontenc}
    \\usepackage[french]{babel}
    \\usepackage{geometry}
    \\geometry{left=2.5cm,right=2.5cm,top=2.5cm,bottom=2.5cm}
    \\usepackage{fontspec}
    \\setmainfont{Garamond}
    \\usepackage{xcolor}

    \\begin{document}
    \\begin{letter}{{{companyName}}\\\\{{companyAddress}}}

    \\opening{Madame, Monsieur,}

    {{letterContent}}

    \\closing{Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.}

    \\vspace{1cm}
    {{applicantName}}\\\\
    {{applicantEmail}}\\\\
    {{applicantPhone}}

    \\end{letter}
    \\end{document}
    `,
  },
  {
    id: "de-formal",
    name: "Formelles Anschreiben",
    language: "German",
    template: `
    \\documentclass[11pt,a4paper]{letter}
    \\usepackage[utf8]{inputenc}
    \\usepackage[T1]{fontenc}
    \\usepackage[german]{babel}
    \\usepackage{geometry}
    \\geometry{left=2.5cm,right=2.5cm,top=2.5cm,bottom=2.5cm}
    \\usepackage{fontspec}
    \\setmainfont{Calibri}

    \\begin{document}
    \\begin{letter}{{{companyName}}\\\\{{companyAddress}}}

    \\opening{Sehr geehrte Damen und Herren,}

    {{letterContent}}

    \\closing{Mit freundlichen Grüßen,}

    \\vspace{1cm}
    {{applicantName}}\\\\
    {{applicantEmail}}\\\\
    {{applicantPhone}}

    \\end{letter}
    \\end{document}
    `,
  },
  {
    id: "en-professional",
    name: "Professional Cover Letter",
    language: "English",
    template: `
    \\documentclass[11pt,a4paper]{article}
    \\usepackage{geometry}
    \\geometry{left=2.5cm,right=2.5cm,top=2.5cm,bottom=2.5cm}
    \\usepackage{fontspec}
    \\setmainfont{Times New Roman}
    \\usepackage{parskip}
    \\usepackage{hyperref}
    \\hypersetup{colorlinks=true,urlcolor=blue}

    \\begin{document}
    \\noindent{{applicantName}}\\\\
    {{applicantAddress}}\\\\
    {{applicantEmail}}\\\\
    {{applicantPhone}}

    \\vspace{0.5cm}
    \\noindent\\today

    \\vspace{0.5cm}
    \\noindent{{recipientName}}\\\\
    {{companyName}}\\\\
    {{companyAddress}}

    \\vspace{0.5cm}
    \\noindent Dear {{recipientName}},

    \\vspace{0.3cm}
    {{letterContent}}

    \\vspace{0.3cm}
    \\noindent Yours sincerely,

    \\vspace{1cm}
    \\noindent{{applicantName}}
    \\end{document}
    `,
  },
  {
    id: "fr-moderne",
    name: "Lettre de Motivation Moderne",
    language: "French",
    template: `
    \\documentclass[11pt,a4paper]{article}
    \\usepackage[utf8]{inputenc}
    \\usepackage[T1]{fontenc}
    \\usepackage[french]{babel}
    \\usepackage{geometry}
    \\geometry{left=2cm,right=2cm,top=2cm,bottom=2cm}
    \\usepackage{fontspec}
    \\setmainfont{Helvetica}
    \\usepackage{xcolor}
    \\usepackage{parskip}

    \\begin{document}
    \\noindent{{applicantName}}\\\\
    {{applicantAddress}}\\\\
    {{applicantEmail}}\\\\
    {{applicantPhone}}

    \\vspace{0.5cm}
    \\noindent\\today

    \\vspace{0.5cm}
    \\noindent{{companyName}}\\\\
    {{companyAddress}}

    \\vspace{0.5cm}
    \\noindent Objet : Candidature pour le poste de {{jobTitle}}

    \\vspace{0.3cm}
    \\noindent Madame, Monsieur,

    \\vspace{0.3cm}
    {{letterContent}}

    \\vspace{0.3cm}
    \\noindent Cordialement,

    \\vspace{1cm}
    \\noindent{{applicantName}}
    \\end{document}
    `,
  },
  {
    id: "de-kreativ",
    name: "Kreatives Bewerbungsschreiben",
    language: "German",
    template: `
    \\documentclass[11pt,a4paper]{scrlttr2}
    \\usepackage[utf8]{inputenc}
    \\usepackage[T1]{fontenc}
    \\usepackage[german]{babel}
    \\usepackage{geometry}
    \\usepackage{fontspec}
    \\setmainfont{Frutiger}
    \\usepackage{xcolor}
    \\definecolor{primary}{RGB}{0, 102, 204}

    \\begin{document}
    \\setkomavar{fromname}{{{applicantName}}}
    \\setkomavar{fromaddress}{{{applicantAddress}}}
    \\setkomavar{fromemail}{{{applicantEmail}}}
    \\setkomavar{fromphone}{{{applicantPhone}}}
    \\setkomavar{subject}{\\textcolor{primary}{Bewerbung als {{jobTitle}}}}
    \\setkomavar{place}{\\today}

    \\begin{letter}{{{companyName}}\\\\{{companyAddress}}}
    \\opening{Sehr geehrte Damen und Herren,}

    {{letterContent}}

    \\closing{Mit freundlichen Grüßen,}

    \\end{letter}
    \\end{document}
    `,
  },
];
