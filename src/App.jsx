
import "./App.css";

function App() {
  const buses = [
    {
      number: "B101",
      route: "Vijayawada - Guntur",
      driver: "Ramesh",
      time: "08:00 AM"
    },
    {
      number: "B102",
      route: "Guntur - Tenali",
      driver: "Suresh",
      time: "10:30 AM"
    },
    {
      number: "B103",
      route: "Vijayawada - Eluru",
      driver: "Kiran",
      time: "01:00 PM"
    },
    {
      number: "B104",
      route: "Eluru - Vijayawada",
      driver: "Ravi",
      time: "04:30 PM"
    }
  ];

  return (
    <div className="container">
      <h1>Bus Reservation Schedule</h1>

      <table>
        <thead>
          <tr>
            <th>Bus Number</th>
            <th>Route</th>
            <th>Driver Name</th>
            <th>Departure Time</th>
          </tr>
        </thead>

        <tbody>
          {buses.map((bus) => (
            <tr key={bus.number}>
              <td>{bus.number}</td>
              <td>{bus.route}</td>
              <td>{bus.driver}</td>
              <td>{bus.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
