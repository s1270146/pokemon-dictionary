interface InputProps {
  placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
  return (
    <input
      type="text"
      className="border-2 rounded w-full py-4 px-3 mb-4 text-gray-700 leading-tight focus:outline-none"
      placeholder={placeholder}
    />
  );
}
