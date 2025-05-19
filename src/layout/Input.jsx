const Input = ({label, placeholder}) => {
    return (
        <div className="max-w-sm">
            <label htmlFor="input-label" className="block text-lg font-medium mb-2">
                {label}
            </label>
            <input
                id="input-label"
                className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 border-2 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none w-[10px]"
                placeholder={placeholder} />
        </div>
    );
};

export default Input;
