import TextField from '@mui/material/TextField';

export default function EditItem({
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
}) {
  return (
    <>
        <form onSubmit={onEditFormSubmit}>
        <label htmlFor="updateTodo">Update todo: </label>
        <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            placeholder="Update todo"
            value={currentTodo.text}
            onChange={onEditInputChange}
        />
        <button type="submit" onClick={onEditFormSubmit}>
            Update
        </button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
    </>
  )
}
