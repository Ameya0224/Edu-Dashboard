import React from 'react'

function Person({person}) {

    return (
        <div>
            <h2>I am {person.id} . I have {person.inst_name} . My status is {person.status}</h2>
        </div>
    )

}

export default Person