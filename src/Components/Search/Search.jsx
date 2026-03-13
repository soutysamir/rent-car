
export default function Search({ search, setSearch }) {
   
  return (
    <>
   <div className="mb-4">

      <input
        type="text"
        placeholder="Search by CarName..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control"
      />

    </div> 
    </>
  )
}
