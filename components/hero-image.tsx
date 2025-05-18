export default function HeroImage() {
  return (
    <div className="relative w-full max-w-[500px] h-[400px]">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-sky-100 to-sky-50 rounded-lg transform rotate-3"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-white rounded-lg border border-gray-200 shadow-lg p-6 z-10">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-xs text-gray-500">Cover Letter Generator</div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="bg-gray-100 p-3 rounded-md mb-4">
              <div className="text-sm font-medium mb-1">Job Description</div>
              <div className="h-20 bg-white rounded border border-gray-200 p-2">
                <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-gray-200 rounded mb-2"></div>
                <div className="w-5/6 h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="bg-sky-50 p-3 rounded-md mb-4">
              <div className="text-sm font-medium mb-1">Language</div>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-sky-400 text-white text-xs rounded-full">German</div>
                <div className="px-3 py-1 bg-white text-gray-500 text-xs rounded-full border">English</div>
                <div className="px-3 py-1 bg-white text-gray-500 text-xs rounded-full border">French</div>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-md border border-gray-200 p-3">
              <div className="text-sm font-medium mb-2">Generated Cover Letter</div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-gray-100 rounded"></div>
                <div className="w-5/6 h-2 bg-gray-100 rounded"></div>
                <div className="w-4/5 h-2 bg-gray-100 rounded"></div>
                <div className="w-full h-2 bg-gray-100 rounded"></div>
                <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="px-4 py-2 bg-sky-400 text-white text-xs rounded-md">Download PDF</div>
          </div>
        </div>
      </div>
    </div>
  )
}
