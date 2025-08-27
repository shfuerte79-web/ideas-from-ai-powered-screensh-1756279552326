export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: AI-Powered Screenshot to Text
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
[
  {
    \"title\": \"Smart Note Taker\",
    \"description\": \"أداة لتحويل لقطات الشاشة إلى نصوص منظمة، مع إمكانية إضافة ملاحظات وتعليقات.\",
    \"mvp_plan\": \"استخدام مكتبة OCR لتحويل لقطات الشاشة إلى نصوص، ثم تطوير واجهة مستخدم بسيطة تتيح للمستخدمين إضافة ملاحظات وتعليقات على النصوص المستخرجة.\"
  },
  {
    \"title\": \"Visual Recipe Extractor\",
    \"description\": \"أداة لتحويل لقطات الشاشة لوصفات الطعام إلى نصوص قابلة للطباعة أو المشاركة.\",
    \"mvp_plan\": \"تطوير واجهة مستخدم لتحميل لقطات الشاشة للوصفات، واستخدام تقنية OCR لاستخراج المكونات والتعليمات، ثم تقديم خيار لتنزيل النص كملف PDF.\"
  },
  {
    \"title\": \"Document Summarizer\",
    \"description\": \"أداة لتحويل لقطات الشاشة من المستندات إلى نصوص مختصرة تلخص المحتوى.\",
    \"mvp_plan\": \"استخدام مكتبة OCR لاستخراج النصوص من لقطات الشاشة، ثم تطبيق خوارزمية تلخيص نصوص بسيطة لتقديم ملخصات، مع واجهة مستخدم لعرض النتائج.\"
  }
]
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}