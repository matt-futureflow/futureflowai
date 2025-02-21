import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
  study: {
    title: string
    logo: string
    content: string
    screenshots?: string[]
  }
}

export function CaseStudyModal({ isOpen, onClose, study }: CaseStudyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{study.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <Image
              src={study.logo || "/placeholder.svg"}
              alt="Company logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="prose prose-sm dark:prose-invert">
            <p>{study.content}</p>
          </div>
          {study.screenshots && (
            <div className="grid gap-4 mt-4">
              {study.screenshots.map((screenshot, index) => (
                <Image
                  key={index}
                  src={screenshot || "/placeholder.svg"}
                  alt={`Case study screenshot ${index + 1}`}
                  width={800}
                  height={450}
                  className="rounded-lg border"
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

