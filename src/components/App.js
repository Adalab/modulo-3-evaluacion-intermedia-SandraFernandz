import '../styles/App.scss';
import dataClubs from '../data/clubs.json';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(dataClubs);
  //Estados
  const [newName, setNewName] = useState('');
  const [newWeekDay, setNewWeekDay] = useState(false);
  const [newWeekEnd, setNewWeekEnd] = useState(false);
  const [deleteClub, setDeleteClub] = useState('');

  //Eventos

  const handleName = (ev) => {
    setNewName(ev.currentTarget.value);
  };
  const handleWeekDays = (ev) => {
    setNewWeekDay(ev.currentTarget.checked);
  };

  const handleWeekEnds = (ev) => {
    setNewWeekEnd(ev.currentTarget.checked);
  };

  const handleDeleteClub = (ev) => {
    setDeleteClub(ev.target.id);
    data.splice(deleteClub, 1);
    setData([...data]);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    // estas acciones requieren que los values de los inputs estén controlados con checked= y value= respectivamente
    setNewName('');
    setNewWeekDay(false);
    setNewWeekEnd(false);

    const newClub = {
      name: newName,
      openOnWeekdays: newWeekDay,
      openOnWeekend: newWeekEnd,
    };
    setData([...data, newClub]);
  };

  const renderClubs = data.map((oneClub, index) => (
    <li key={index}>
      <h3>
        <i
          className="fas fa-minus-circle"
          onClick={handleDeleteClub}
          id={index}
        ></i>
        {` ${index} `}
        {oneClub.name}
      </h3>
      <p>
        Abierto entre semana:{oneClub.openOnWeekdays === true ? 'Sí' : 'No'}
      </p>
      <p>
        Abierto el fin de semana:{oneClub.openOnWeekend === true ? 'Sí' : 'No'}
      </p>
    </li>
  ));
  return (
    <div>
      <header>
        <h1>Mis Clubs</h1>
        <span>
          <h3>Añadir un nuevo club</h3>
        </span>

        <span>
          <select name="selectOption" id="selectOption">
            <option value="">todos</option>
            <option value="">los que abren entre semana</option>
            <option value="">los que abren el fin de semana</option>
          </select>
        </span>
      </header>
      {/*Clubs*/}
      <main>
        <ul>{renderClubs}</ul>
      </main>
      <footer>
        <form action="">
          <p>
            <label htmlFor="name">Nombre del club </label>
            <input
              type="text"
              name="name"
              id="name"
              value={newName}
              placeholder="Nombre del Club"
              onChange={handleName}
            />
          </p>
          <p>
            <label htmlFor="nameWeekDays">¿Abre entre semana?</label>
            <input
              type="checkbox"
              checked={newWeekDay}
              name="nameWeekDays"
              id="nameWeekDays"
              onChange={handleWeekDays}
            />
          </p>
          <p>
            <label htmlFor="nameWeekEnds">¿Abre los fines de semana?</label>
            <input
              type="checkBox"
              checked={newWeekEnd}
              name="nameWeekEnds"
              id="nameWeekEnds"
              onChange={handleWeekEnds}
            />
          </p>
          <input
            type="submit"
            value="Añadir un nuevo club"
            name=""
            id=""
            onClick={handleClick}
          />
        </form>
      </footer>
    </div>
  );
}

export default App;
