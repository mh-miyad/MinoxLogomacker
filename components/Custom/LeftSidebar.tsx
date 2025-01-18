import { cn } from "@/lib/utils";
import {
  Archive,
  Clock,
  CreditCard,
  Home,
  Languages,
  Settings,
  Upload,
  User,
} from "lucide-react";
import { SiBombardier } from "react-icons/si";
import { ScrollArea } from "../ui/scroll-area";
const menuItems = [
  { name: "Dashboard", icon: Home, active: true },
  { name: "Credit", icon: CreditCard },
  { name: "History", icon: Clock },
  { name: "Upload", icon: Upload },
  { name: "Payment", icon: CreditCard },
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
  { name: "Language", icon: Languages },
  { name: "Archive", icon: Archive },
];
const LeftSidebar = () => {
  return (
    <div className="w-64 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r">
      <ScrollArea className="h-screen transition-all ease-linear duration-300 delay-100">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <SiBombardier className="text-xl text-sky-500" />
            <span className="text-xl font-semibold">Logiclogo</span>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground",
                  item.active && "bg-primary/10 text-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="p-4 mt-auto">
          <div className="rounded-lg bg-primary/10 p-4">
            <h3 className="font-semibold mb-1">Upgrade To Pro</h3>
            <p className="text-sm text-muted-foreground mb-3">Save Up To</p>
            <div className="text-2xl font-bold">17%</div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default LeftSidebar;
