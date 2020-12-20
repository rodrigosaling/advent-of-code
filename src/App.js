import { useState } from 'react';
import Navbar from './components/navbar';
import { Day1 } from './2020/day1/day1';

const days = [1];

const daysComponents = {
  Day1,
};

const selectDayComponent = (day) => {
  const DayComponent = daysComponents[`Day${day}`];
  return <DayComponent />;
};

function App() {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <div>
      <Navbar />

      <main className="p-4">
        <div className="tabs">
          <ul>
            {days.map((day) => (
              <li className={day === selectedDay ? 'is-active' : ''} key={day}>
                <a href="#" onClick={() => setSelectedDay(day)}>
                  Day {day}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {selectDayComponent(selectedDay)}
      </main>
    </div>
  );
}

export default App;
