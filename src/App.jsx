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
        
        <Grid container md={10}>
          <Grid item md={12}>
            <span className='light-mode-icon'></span>
            <h1>DASHBOARD</h1>
            <h4>Welcome to your dashboard</h4>
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
          <Grid item md={2}>
          <span className='phone-icon'></span>
            <h2>431,231</h2>
            <h4>Sales Obtained</h4>
            <h4> -21%</h4>
          </Grid>
          <Grid item md={8}>
            <h2>Revenue Generated</h2>
            <h3> -$3,701,004,521.02 </h3>
          </Grid>
          <Grid item md={4}>
            <h3>Recent Transactions</h3>
            <hr/>
            <Grid>
              <h2>01e4dsa</h2>
              <span>johndoe</span>
              <h4>2021-09-01</h4>
              <h3>$43.95</h3>  
            </Grid>
            <hr/>
            <Grid>
              <h2>0315dsaa</h2>
              <span>jackdower</span>
              <h4>2022-04-01</h4>
              <h3>$133.45</h3>
            </Grid>
            <hr/>
            <Grid>
              <h2>01e4dsa</h2>
              <span>johnnyappleseed</span>
              <h4>2022-09-01</h4>
              <h3>$430.95</h3>
            </Grid>
            
            <hr/>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default App
