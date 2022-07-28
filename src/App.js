import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChallengeDetails from './Pages/ChallengeDetailsPage/ChallengeDetails';
import CreateChallenge from './Pages/CreateChallengePage/CreateChallenge';
import Home from './Pages/HomePage/Home/Home';
import NavBar from './Shared/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-challenge" element={<CreateChallenge />} />
        <Route path="/challenge-details" element={<ChallengeDetails />} />
        {/* <Route path='*' element={} */}
      </Routes>
    </>
  );
}

export default App;
