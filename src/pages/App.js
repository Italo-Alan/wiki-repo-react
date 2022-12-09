import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import { useState } from 'react';
import  { api }  from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
  

  const handleSearchRepo = async () =>{
    const {data} = await api.get(`repos/${currentRepo}`)

    const isExist = repos.find(repo => repo.id === data.id);

    if(!isExist){
      setRepos(prev => [...prev, data]);
      setCurrentRepo('')
      return
    }
  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);

    // utilizar filter.
  }


  return (
    <Container>
      <img width={72} height={72} alt="Logo github" src="https://camo.githubusercontent.com/fe3b97974431a5652f0572ef8dd3c46d206d0aeb9658c7dd1f9c766ed89e4215/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f6769746875622d69636f6e2d77686974652f6769746875622d69636f6e2d77686974652d362e6a7067"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
