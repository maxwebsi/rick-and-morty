const Pagination = (props) => {
    return(
        <div className="flex flex-row items-center p-0">
            <a className="bg-gray-800 border border-gray-700 rounded-s rounded-r-0 border-x-0 py-1.5 px-3 w-28 text-white text-center">Previous</a>
            <a className="bg-gray-800 border border-gray-700 rounded-r rounded-s-0 py-1.5 px-3 w-28 text-white text-center">Next</a>
        </div>
    )
}

export default Pagination;