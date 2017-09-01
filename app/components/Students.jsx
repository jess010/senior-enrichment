import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Students (props) {

        return (
        <div>
            <h1>Students</h1>
            <ul className="media-list">
                { props.students.map(student => <li key={student.id} className="student-list">{student.name}</li>
                )}
            </ul>
        </div>
        )

}
