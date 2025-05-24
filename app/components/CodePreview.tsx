import { useState } from "react"
import { TabsContent, TabsRoot } from "@/ui/Tabs"
import { cn } from "@/utils"

function decodeHtml(html: string) {
  var txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

export const CodePreview = ({
  code,
  children,
  className,
}: {
  code: string | null
  children: React.ReactElement
  className?: string
}) => {
  const [selectedTab, setSelectedTab] = useState<string>("preview")

  return (
    <div className="w-full relative -my-6">
      <TabsRoot
        defaultValue="preview"
        value={selectedTab}
      >
        <div className="flex flex-1 py-6">
          <TabsContent value="preview">
            <div
              className={cn(
                "not-prose size-full border bg-gray-50 border-gray-200 px-6 py-16 rounded-lg shadow-md flex items-center justify-center shadow-gray-200/20 gap-2 flex-wrap",
                className
              )}
            >
              {children}
            </div>
          </TabsContent>
        </div>
      </TabsRoot>
    </div>
  )
}
