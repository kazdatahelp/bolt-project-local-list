interface SortDropdownProps {
  onSortChange: (value: string) => void;
}

export default function SortDropdown({ onSortChange }: SortDropdownProps) {
  return (
    <select
      onChange={(e) => onSortChange(e.target.value)}
      className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
        bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <option value="name">Name</option>
      <option value="modified">Last Modified</option>
      <option value="type">Project Type</option>
    </select>
  );
}
