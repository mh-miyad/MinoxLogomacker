"use client";
import { useLogoStore } from "@/Store/useLogoStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CgChanel } from "react-icons/cg";
import { ScrollArea } from "../ui/scroll-area";
const LogoEditor = () => {
  const { letters } = useLogoStore();
  return (
    <ScrollArea className="h-screen">
      <div className=" p-6 ">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Good Evening</h1>
          <div className="flex gap-2">
            <Button variant="outline">Save</Button>
            <Button>Share</Button>
          </div>
        </div>
        <div className="w-full h-[300px] border border-gray-700 border-dashed rounded-lg mb-6">
          {/* Logo preview area */}
          <div className="flex items-center justify-center h-full">
            <div className="text-4xl font-bold text-white flex ">
              <span>
                <CgChanel className="size-11" />
              </span>
              {letters || "CREDENCE"}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline">Create Variation</Button>
            <Button variant="outline">Adjust</Button>
            <Button variant="outline">Enhance</Button>
          </div>
          <Button>Export</Button>
        </div>

        <div className="mt-6">
          <div className="relative">
            <Input className="pl-12 pr-12" placeholder="Write Your Prompt" />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <span className="sr-only">Send prompt</span>
              🪄
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default LogoEditor;
