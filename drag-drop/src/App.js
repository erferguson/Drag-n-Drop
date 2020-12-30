import './App.css';

import DragNDrop from './Components/DragNDrop'

const data = [
  {title: "Group 1", items: ['1', '2', '3']},
  {title: "Group 2", items: ['4', '5']}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DragNDrop data={data} />
        
        {/* <div className="drag-n-drop">
          <div className="dnd-group">
            <div className="group-title">Group 1</div>
            <div className="dnd-item">
              <div>
                <p>ITEM 1</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 2</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 3</p>
              </div>
            </div>
          </div>
          <div className="dnd-group">
          <div className="group-title">Group 2</div>
            <div className="dnd-item">
              <div>
                <p>ITEM 1</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 2</p>
              </div>
            </div>
          </div>
          <div className="dnd-group">
            
          </div>
        </div> */}
      </header>
    </div>
  );
}

export default App;
