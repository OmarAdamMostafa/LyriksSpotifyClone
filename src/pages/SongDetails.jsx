import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'

import { useGetSongDetailsQuery, useGetRelatedSongQuery } from '../redux/services/shazamCore';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongDetails = () => {
    const dispatch = useDispatch()
    const { songid, id: artistId } = useParams()
    const { activeSong, isPlaying } = useSelector((state)=>state.player)
    const { data: songData, isFetching: isFetchingSongDetails  } = useGetSongDetailsQuery(songid) 
    const { data: relatedData, isFetching: isFetchingRelatedSong, error } = useGetRelatedSongQuery(songid)

    if(isFetchingSongDetails || isFetchingRelatedSong){
        return <Loader title={"Searching for song details..."}/>
    }
    if(error){
        return <Error/>
    }

    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    const handlePlayClick = (song, index) => {
        dispatch(setActiveSong({song, relatedData, index}))
        dispatch(playPause(true))
    }

    return (
        <div className='flex flex-col'>
            <DetailsHeader artistId={artistId} songData={songData} />

            <div className='mb-10'>
                <h2 className='text-white text-3xl font-bold'>
                    Lyrics:
                </h2>
                <div className='mt-5'>
                    {
                        songData?.sections[1].type === 'LYRICS' ? (
                            songData?.sections[1].text.map((line, index)=>(
                                <p key={`lyrics-${line}-${index}`} className='text-gray-400 text-base my-1'>
                                    {line}
                                </p>
                            ))
                        ) : (
                            <p className='text-gray-400 text-base my-1'>
                                Sorry, no lyrics found!
                            </p>
                        )
                    }
                </div>
            </div>

            <RelatedSongs 
                data={relatedData}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
            />
        </div>
    )
};

export default SongDetails;
