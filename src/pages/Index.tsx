
import { useState } from "react";
import { Header } from "@/components/Header";
import { FilterCards } from "@/components/FilterCards";
import { DataTable } from "@/components/DataTable";
import { DataModal } from "@/components/DataModal";

// Sample data - replace with your API call
const generateSampleData = () => {
  const statuses = ['Active', 'Inactive', 'Pending', 'Completed'];
  const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];
  
  return Array.from({ length: 150 }, (_, i) => ({
    id: `ID-${1000 + i}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@company.com`,
    department: departments[Math.floor(Math.random() * departments.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    joinDate: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)).toISOString().split('T')[0],
    salary: Math.floor(Math.random() * 100000) + 40000,
  }));
};

const Index = () => {
  const [searchId, setSearchId] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const allData = generateSampleData();
  
  // Filter data based on search and filters
  const filteredData = allData.filter(item => {
    const matchesId = searchId === "" || item.id.toLowerCase().includes(searchId.toLowerCase());
    const matchesStatus = selectedStatus === "all" || item.status === selectedStatus;
    const matchesDepartment = selectedDepartment === "all" || item.department === selectedDepartment;
    return matchesId && matchesStatus && matchesDepartment;
  });

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header searchId={searchId} onSearchChange={setSearchId} />
      
      <main className="container mx-auto px-4 py-6">
        <FilterCards 
          selectedStatus={selectedStatus}
          selectedDepartment={selectedDepartment}
          onStatusChange={setSelectedStatus}
          onDepartmentChange={setSelectedDepartment}
          totalRecords={filteredData.length}
        />
        
        <DataTable 
          data={filteredData}
          onViewDetails={handleViewDetails}
        />
      </main>

      <DataModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedItem}
      />
    </div>
  );
};

export default Index;
