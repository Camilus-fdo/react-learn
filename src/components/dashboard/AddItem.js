import TextField from '@mui/material/TextField';

export default function AddItem({todo, onAddInputChange, onAddFormSubmit}) {
  return (
    <div>
        <form onSubmit={onAddFormSubmit}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Add To List"
                autoFocus
                value={todo}
                onChange={onAddInputChange}
            />
        </form>
    </div>
  )
}
