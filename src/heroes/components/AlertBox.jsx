import React from 'react'

const AlertBox = ({ query = '', dataLength }) => {

    const showSearchBox = (query === '')
    const showErrorBox = (query !== '') && (dataLength === 0)

    return (
        <>
            <div 
                className="alert alert-primary animate__animated animate__fadeIn" 
                style={{display: showSearchBox ? '' : 'none'}}
                aria-label="alert-default"
            >
                Search a Hero
            </div>

            <div 
                className="alert alert-danger animate__animated animate__fadeIn" 
                style={{display: showErrorBox ? '' : 'none' }}
                aria-label="alert-warning"
            >
                No Hero Found with <b>{query}</b>
            </div>
        </>
    )
}

export default AlertBox