import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Students (props) {

        return (
        <div>
            <h1>Students</h1>
            <NavLink to={'/students/add/'}>Add New Student</NavLink>
            <ul className="media-list">
                { props.students.map(student => {
                    return ( <div key={student.id}>
                    <li className="student-list"><NavLink to={`/students/${student.id}`}>{student.name}</NavLink></li>
                    <button className="btn btn-xs btn-danger remove btn-circle" onClick={() => props.deleteStudent}>X</button>
                    </div>
                    )
                }
                )}
            </ul>
        </div>
        )

}
