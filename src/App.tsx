import './App.css'

function App() {
  const todayTasks = [
    {
      id: 1,
      title: 'Change Oil',
      priority: 'High',
      estimatedTime: '30 min',
      list: 'Car Maintenance',
    },
    {
      id: 2,
      title: 'Buy Light Bulbs',
      priority: 'Medium',
      estimatedTime: '15 min',
      list: 'Home Projects',
    },
    {
      id: 3,
      title: 'Pay Water Bill',
      priority: 'High',
      estimatedTime: '5 min',
      list: 'Finances',
    },
  ]

  return (
    <div className="app">
      <header>
        <h1>SToDo</h1>
        <p>Smart Task Organization Dashboard</p>
      </header>

      <main>
        <section>
          <h2>Today's Tasks</h2>

          {todayTasks.map((task) => (
            <div
              key={task.id}
              style={{
                border: '1px solid #ccc',
                padding: '12px',
                marginBottom: '10px',
                borderRadius: '8px',
              }}
            >
              <h3>{task.title}</h3>

              <p>
                <strong>List:</strong> {task.list}
              </p>

              <p>
                <strong>Priority:</strong> {task.priority}
              </p>

              <p>
                <strong>Estimated Time:</strong> {task.estimatedTime}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App