import Blog from "@/app/models/blog";
import connectToDb from "@/database";
import Joi from "joi";
import { NextResponse } from "next/server";
import React from "react";

const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

async function POST(req) {
  try {
    await connectToDb();
    const extractBlogdata = await req.json();
    const { title, description } = extractBlogdata;

    const { error } = AddNewBlog.validate({ title, description });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const newlyCreatedBlogItem = await Blog.create(extractBlogdata);
    if (newlyCreatedBlogItem) {
      return NextResponse.json({
        success: true,
        message: "blog added successfully",
      });
    }
    else{
        return NextResponse.json({
            success: false,
            message: "somehting went wrong",
          });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "somehting went wrong",
    });
  }
}

export  {POST};
