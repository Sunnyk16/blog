'use client';
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react"
 

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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function AddNewBlog({openBlogDialog, setOpenBlogDialog,loading ,setLoading,blogFormData, setBlogFormData,handleSaveBlogData }) {
  return (
    <div>
        <div className="">
        {/* blog overview */}
        <div>
          {/* add new blog section */}
          <Button className="capitalize"  onClick={()=> setOpenBlogDialog(true)}>add new blog</Button>
        </div>
        
        <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDialog}>
      <DialogContent className="max-w-md sm:max-w-lg lg:max-w-xl">
        <DialogHeader>
          <DialogTitle>Share Information</DialogTitle>
          <DialogDescription>
            Provide a name and description for the content you want to share.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter the name" value={blogFormData.title} onChange={(event)=>setBlogFormData({
                ...blogFormData,
                title:event.target.value 

            })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Enter a description" value={blogFormData.description} onChange={(event)=>setBlogFormData({
                ...blogFormData,
                description:event.target.value
            })}/>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={handleSaveBlogData}>
              save changes
            </Button>
          </DialogClose>
          {/* <Button type="submit" size="sm" className="ml-2">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </div>
    </div>
  )
}

export default AddNewBlog