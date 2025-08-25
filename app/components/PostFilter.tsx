type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

const PostFilter = ({ searchQuery, onSearchChange }: PostFilterProps) => {
  return (
    <div className="mb-6">
      <input
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search posts..."
      />
    </div>
  );
};

export default PostFilter;
