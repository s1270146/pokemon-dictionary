import { SelectOption } from "@/types"

interface SelectProps {
    options: SelectOption[]
    onChange: ()=>void;
}

export default function Select({
    options,
    onChange
}: SelectProps) {
    return <div className="mb-4 block appearance-none w-full bg-white border border-gray-400 text-gray-700 hover:border-gray-400 px-4 py-3 pr-8 rounded">
        <select
            onChange={()=>onChange()}
            className="w-full focus:outline-none"
        >
            {options.map((option, index) => (
            <option key={index} value={ option.value ?? undefined}>
                {option.label}
            </option>
            ))}
        </select>
    </div>
}