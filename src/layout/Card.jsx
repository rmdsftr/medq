const Card = ({ judul, label, gambar }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl overflow-hidden">
      <img
        src={gambar}
        className="w-full h-48 object-cover"
        alt={judul}
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800">{judul}</h3>
        <p className="mt-1 text-gray-600">
          {judul}
        </p>
        <div className="mt-4 flex justify-end">
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-4 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            {label}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
