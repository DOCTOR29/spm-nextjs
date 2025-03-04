import { Copy } from "lucide-react"
 
// import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import EnquiryForm from "./EnquiryForm"
import { Button } from "@/components/ui/button"
import Super30Form from "./super30-from-componet";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
 
export function OpenRegDialog({title, variant, super30 }: 
  {super30?: boolean ;title?:String; variant?: "purple" | "navy" | "green" | "link" | "blue" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined} ) {
  return (
    <Dialog>
      <DialogTrigger asChild >

      {/* {Cbutton ? Cbutton : <Button  >{title}</Button> } */}
      {title && <Button variant={variant || 'default'} >{title}</Button>}
      {/* {Cbutton && <Cbutton/> } */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enroll to SPM and Lalan's</DialogTitle>
          <DialogDescription>
            Your path to sucess..
           {super30 ? <Super30Form/> : <EnquiryForm/>}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            {/* <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            /> */}
          </div>
          
        </div>
        <DialogFooter className="sm:justify-start">
          {/* <DialogClose asChild>
            <Button type="button" variant="secondary">

              Close
            </Button>
          </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
Copy
