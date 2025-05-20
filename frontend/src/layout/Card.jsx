const Card = () =>
{
    return (
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl">
  <div className="p-4 md:p-5">
    <h3 className="text-lg font-bold text-gray-800">
      Card title
    </h3>
    <p className="mt-2 text-gray-500">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
      Card link
      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </a>
  </div>
</div>
    )
}

export default Card;