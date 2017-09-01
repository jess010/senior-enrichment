import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Students (props) {

        return (
        <div>
            <h1>Students</h1>
            <ul className="media-list">
                { props.students.map(student => {
                    return ( <div key={student.id}>
                    <li className="student-list">{student.name}</li>
                    <button className="btn btn-xs btn-danger remove btn-circle" onClick={props.deleteStudent}>X</button>
                    </div>
                    )
                }
                )}
            </ul>
        </div>
        )

}
