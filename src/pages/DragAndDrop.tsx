import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import './DragAndDrop.css';

type ItemType = {
  id: string;
  component: JSX.Element;
};

const finalSpaceCharacters: ItemType[] = [
  {
    id: 'select',
    component: (
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    ),
  },
  {
    id: 'input',
    component: (
      <div>
        <input type="text" placeholder="text input" />
      </div>
    ),
  },
  {
    id: 'checkbox',
    component: (
      <div>
        <label htmlFor="myCheckbox1">
          <input id="myCheckbox1" type="checkbox" name="myCheckbox" />
          Checkbox 1
        </label>
        <br />
        <label htmlFor="myCheckbox2">
          <input id="myCheckbox2" type="checkbox" name="myCheckbox" />
          Checkbox 2
        </label>
      </div>
    ),
  },
  {
    id: 'content editable',
    component: (
      <div
        contentEditable
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            A content editable with
            <strong>my super cool content</strong>
          `,
        }}
      />
    ),
  },
];

const formArea: ItemType[] = [
  {
    id: 'header',
    component: <h1>New Form</h1>,
  },
];

const DragAndDrop = () => {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  const [secondSet, setSecondSet] = useState(formArea);

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    if (result.destination.droppableId === 'formArea') {
      if (result.source.droppableId === 'characters') {
        const characterItem = characters[result.source.index];
        characterItem.id = characterItem.id + Math.floor(Math.random() * Math.floor(100000));
        const items = Array.from(secondSet);
        items.splice(result.destination.index, 0, characterItem);
        setSecondSet(items);
      } else {
        const items = Array.from(secondSet);
        const [reorderedItem] = items.splice(result.source.index, 1);
        reorderedItem.id = reorderedItem.id + Math.floor(Math.random() * Math.floor(100000));
        items.splice(result.destination.index, 0, reorderedItem);
        setSecondSet(items);
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Drag Component to the New Form</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map((item, index) => {
                  return (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          {item.component}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <div style={{ height: '300px' }}></div>
          <Droppable droppableId="formArea">
            {(provided) => (
              <ul className="formArea" {...provided.droppableProps} ref={provided.innerRef}>
                {secondSet.map((item, index) => {
                  return (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          {item.component}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
};

export default DragAndDrop;
