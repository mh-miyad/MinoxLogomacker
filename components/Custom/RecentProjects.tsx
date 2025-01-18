"use client";
import { ScrollArea } from "../ui/scroll-area";
import ColorPicker from "./ColorPicker";

const RecentProjects = () => {
  return (
    <ScrollArea>
      <div className="w-[300px] p-3 border-l ">
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-4">Colors</h3>
          <div className="mb-4 ">
            <ColorPicker />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">Today</h3>
          {/* <div className="space-y-2">
            {recentProjects
              .filter((p) => isToday(p.timestamp))
              .map((project) => (
                <div
                  key={project.id}
                  className="p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-background rounded" />
                    <span>{project.name}</span>
                  </div>
                </div>
              ))}
          </div> */}
        </div>
      </div>
    </ScrollArea>
  );
};

export default RecentProjects;
// function isToday(date: Date) {
//   const today = new Date();
//   return (
//     date.getDate() === today.getDate() &&
//     date.getMonth() === today.getMonth() &&
//     date.getFullYear() === today.getFullYear()
//   );
// }
