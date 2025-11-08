import './NoMatch.css';


const NoMatch = () => {
    return (
        <>
          <div className="no-match-container">
      <h1>404</h1>
      <h2>Oops! Nothing to see here.</h2>
      <p>The page you are looking for might be gone or never existed.</p>
      <a href="/" className="home-btn">Go Back Home</a>
    </div>    
        </>
    )
}

export default NoMatch;