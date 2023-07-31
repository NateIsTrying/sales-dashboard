import './App.css'
import Grid from '@mui/material/Grid';

const App = () => {

  return (
    <>
      
      <Grid container spacing={1}>
        <Grid item md={2}>
          <span className='hamburger-icon'></span>
          <h2>Alameda Financial 2023</h2>
          <h3>Profits and Losses</h3>
          <h4>Dashboard Owner</h4>

          <h5><span className='home-icon'></span> ButtonDashboard</h5>
          <h5><span className='question-icon'></span> Faq Page</h5>
        </Grid>
        
        <Grid item container md={10}>
          <span className='light-mode-icon'></span>
          <h1>DASHBOARD</h1>
          <h4>Welcome to your dashboard</h4>
          <Grid item md={2}>
            <span className='phone-icon'></span>
            <h2>431,231</h2>
            <h4>Sales Obtained</h4>
            <h4> -21%</h4>
          </Grid>
          <Grid item md={2}>
          <span className='phone-icon'></span>
            <h2>431,231</h2>
            <h4>Sales Obtained</h4>
            <h4> -21%</h4>
          </Grid>
          <Grid item md={2}>
          <span className='phone-icon'></span>
            <h2>431,231</h2>
            <h4>Sales Obtained</h4>
            <h4> -21%</h4>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default App
