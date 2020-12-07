import React from 'react'

function Person({person}) {

    return (
        <div>
            <h2>I am {person.id} . I have {person.type_of_loan} . My status is {person.status}</h2>
        </div>
    )

}

export default Person