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
        console.log('drag starting..', params)
        dragItem.current = params
        dragNode.current = e.target 
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true)
        }, 0);
    }

    const handleDragEnter = (e, params) => {
        console.log('Entering drag..', params)
        const currentItem = dragItem.current
        if(e.target !== dragNode.current){
            console.log('TARGET NOT THE SAME')
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[params.grpI].items.splice(params.itemI, 0, newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0])
                // dragItem.current
                dragItem.current = params
                return newList
            })
        }
    }

    const handleDragEnd = () => {
        console.log('Ending Drag...')
        setDragging(false)
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null
        dragNode.current = null
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
          <div 
            key={grp.title} 
            className="dnd-group"
            onDragEnter={dragging && !grp.items.length ? (e) => handleDragEnter(e, {grpI, itemI: 0}) : null }
          >
            <div className="group-title">{grp.title}</div>
            {grp.items.map((item, itemI) => (
              <div 
              draggable 
              onDragStart={(e) => {handleDragStart(e, {grpI, itemI})}}
              onDragEnter = {dragging ? (e) => (handleDragEnter(e,{grpI, itemI})): null}
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