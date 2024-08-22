"use client";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import AddNewBlog from "../add-new-blog";

const initialBlogFormData = {
    title: "",
    description: "",
}

function BlogOverview() {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
//   const [blogFormData, setBlogFormData] = useState({
//     title: "",
//     descrition: "",
//   });
  console.log(blogFormData);

  async function handleSaveBlogData() {
    try {
      const apiRespnse = await fetch("/api/add-blog", {
        method: "POST",
        body: JSON.stringify(blogFormData),
      });
      const result = await apiRespnse.json();
      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  }

  return (
    <div className="h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-green-400 p-6 ">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
      />
      <div>blog list section</div>
    </div>
  );
}

export default BlogOverview;
