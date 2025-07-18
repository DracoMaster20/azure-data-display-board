
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Building, Calendar, DollarSign, Activity } from "lucide-react";

interface DataItem {
  id: string;
  name: string;
  email: string;
  department: string;
  status: string;
  joinDate: string;
  salary: number;
}

interface DataModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: DataItem | null;
}

export const DataModal = ({ isOpen, onClose, data }: DataModalProps) => {
  if (!data) return null;

  const getStatusBadge = (status: string) => {
    const variants = {
      Active: "bg-green-100 text-green-800 hover:bg-green-100",
      Inactive: "bg-gray-100 text-gray-800 hover:bg-gray-100",
      Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
      Completed: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    };
    return variants[status] || "bg-gray-100 text-gray-800 hover:bg-gray-100";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-primary">
            User Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <User className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">{data.name}</h3>
            <p className="text-sm text-muted-foreground">{data.id}</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email Address</p>
                <p className="text-sm text-muted-foreground">{data.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Department</p>
                <p className="text-sm text-muted-foreground">{data.department}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Status</p>
                <Badge className={getStatusBadge(data.status)}>
                  {data.status}
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Join Date</p>
                <p className="text-sm text-muted-foreground">{data.joinDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Salary</p>
                <p className="text-sm text-muted-foreground font-semibold">
                  ${data.salary.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
