"use client";
import { useLogoStore } from "@/Store/useLogoStore";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

const RecentProjects = () => {
  const recentProjects = useLogoStore((state) => state.recentProjects);
  const selectedColor = useLogoStore((state) => state.selectedColor);
  const setSelectedColor = useLogoStore((state) => state.setSelectedColor);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  };
  return (
    <ScrollArea>
      <div className="w-72 p-6 border-l">
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-4">Colors</h3>
          <div className="flex gap-2">
            {[
              "#FF4365",
              "#FF8C42",
              "#FFD93D",
              "#4CAF50",
              "#2196F3",
              "#9C27B0",
            ].map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
          <div className="mt-4">
            <Input
              value={selectedColor}
              onChange={handleColorChange}
              className="font-mono"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">Today</h3>
          <div className="space-y-2">
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
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default RecentProjects;
function isToday(date: Date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}
