import React from 'react'

export default function TodoItem({todo, onDeleteClick, onEditClick}) {
  return (
    <>
       <div className='row mt-2'>
            <div className='col-9'>
                {todo.text}
            </div>
            <div className='col-3'>
                <button onClick={() => onEditClick(todo)}>Edit</button>
                <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
            </div>   
        </div> 
    </>
  )
}
