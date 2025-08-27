import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '```json
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
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}