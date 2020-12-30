import React, { useState, useRef } from 'react'

function DragNDrop({data}){
    // data passed from App via props{destructed}
    // data set to list using useState
    const [list, setList ] = useState(data)
    // data changed to list for .map()

    const [dragging, setDragging ] = useState(false)

    const dragItem = useRef() // look up useRef, unclear
    const dragNode = useRef()

    const handleDragStart = (e, params) => {
        console.log('drag starting', params)
        dragItem.current = params
        dragNode.current = e.target 
        dragNode.current.addEventListener('dragend', handelDragEnd)
        setDragging(true)
    }

    const handelDragEnd = () => {
        console.log('Ending Drag...')
    }

    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI){
            return 'current dnd-item'
        }
        return 'dnd-item'
    }

    return (
        <div className="drag-n-drop"> 
          {list.map((grp, grpI) => (
          <div key={grp.title} className="dnd-group">
            <div className="group-title">{grp.title}</div>
            {grp.items.map((item, itemI) => (
              <div 
              draggable 
              onDragStart={(e) => {handleDragStart(e, {grpI, itemI})}} 
              key={item} 
              className={dragging ? getStyles({grpI, itemI}) : "dnd-item"}
              >
                {item}
              </div> 
            ))}
          </div>
        ))}
        </div>
    )
}

export default DragNDrop;

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