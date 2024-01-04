
import { useState } from 'react';
import './App.css'
import Body from './components/Body';
import FooterLine from './components/FooterLine';
import ProfileCard from './components/ProfileCard';
import SuccessMobal from './components/SuccessMobal';

function App() {
  const [success, setSuccess] = useState<any>(false);

  return (
		<>
			{success && <SuccessMobal/>}
			<ProfileCard />
			<Body setSuccess={setSuccess} />
			<FooterLine />
		</>
	);
}

export default App
