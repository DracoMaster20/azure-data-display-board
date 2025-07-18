
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  searchId: string;
  onSearchChange: (value: string) => void;
}

export const Header = ({ searchId, onSearchChange }: HeaderProps) => {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Azure Data Display Board</h1>
            <p className="text-primary-foreground/80">Manage and view your data with ease</p>
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Enter ID to search..."
              value={searchId}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-background text-foreground border-border"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
