import React from 'react'
import Notes from './Notes'

const Home = (props) => {

    return (
        <>
            <div className='container p-3 my-3'>
                <Notes showalert={props.showalert} />
            </div>
        </>
    )
}

export default Home
