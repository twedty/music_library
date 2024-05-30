import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { Fragment } from 'react/cjs/react.production.min'

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [songData, setSongData] = useState([])

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} Music`
        const response = await fetch(API_URL + search)
        const resData = await response.json()
        if (resData.results.length > 0) {
          return setSongData(resData.results)
        } else {
          return setMessage('Not Found')
        }
      }
      fetchData()
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div>
      {message}
      <Router>
        <Routes>
          <Route path="/" element={
            <Fragment>
              <SearchBar handleSearch={handleSearch} />
              <Gallery songData={songData} />
            </Fragment>
          } />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App



// return (
//   <div>
//     {message}
//     <Router>
//       <Routes>
//         <Route path="/" element={
//           <Fragment>
//             <SearchBar handleSearch = {handleSearch}/>
//             <Gallery data={data} />
//           </Fragment>
//         } />
//         <Route path="/album/:id" element={<AlbumView />} />
//         <Route path="/artist/:id" element={<ArtistView />} />
//       </Routes>
//     </Router>
//   </div>
//   );

//artist view
{/* <Link to={'/'}>Home</Link> */}

// const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

//     const renderAlbums = justAlbums.map((album, i) => {
//         return (
//             <div key={i}>
//                 <p>{album.collectionName}</p>
//             </div>
//         )
//     })
    
//     return (
//         <div>
//             <h2>The id passed was: {id}</h2>
//             <p>Artist Data Goes Here!</p>
//             {renderAlbums}
//         </div>
//     )