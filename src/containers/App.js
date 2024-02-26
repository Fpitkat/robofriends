import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';
import ErrorBoundry from '../components/ErrorBoundry';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name
      .toLowerCase()
      .includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
