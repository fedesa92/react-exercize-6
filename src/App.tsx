import Container from '@mui/material/Container'
import './App.css'
import { Paper, Typography } from '@mui/material'

function App() {
  return (
    <Container sx={{mt: 5, textAlign: 'center'}}>
      <Typography variant='h3' gutterBottom>
        React exercize - e commerce site with material ui styled components
      </Typography>
      <Paper elevation={3}>
        some content
      </Paper>
    </Container>
  )
}

export default App
