import FormTodo from "./FormTodo";
import TaskList from "./TaskList";
import './Container.css'
import { useState , useEffect } from "react";


const Container = () => {
  
  const [list, setList] = useState([]); //creamos un array con los items
  const handleAddItem = addItem => {
    console.log(addItem)
    // setList([...list, addItem]); //esto lo cambiamos por la linea 12

    const newList = list.slice();
    newList.push(addItem);

    // newList.map((item) => console.log(item.description))

    const sortedData = [...newList].sort((a, b) => a.description.localeCompare(b.description))
    const sortedDatacheck = [...sortedData].sort((a, b) => a.done == false ? 1 : a.done == true ? -1 : 0)

    
    console.log(sortedDatacheck)
    setList(sortedDatacheck);

    console.log(list)
    
  };
    return (
      <div>

        <FormTodo handleAddItem={handleAddItem}/>
        <TaskList list={list} setList={setList}/>
        
      </div>
    )
  }
  
  export default Container