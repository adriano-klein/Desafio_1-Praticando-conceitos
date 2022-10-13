import style from './TodoInput.module.css';
import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function TodoInput({createNewTodo}: any) {
  const [newTodoText, setNewTodoText] = useState('')
  const fieldIsEmpty = newTodoText.length === 0;


  function handleNewTodoChange(event: FormEvent){
    const target = event.target as HTMLInputElement;
    setNewTodoText(target.value);
  } 

  function formatTodo(event: FormEvent) {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      description: newTodoText,
      done: false
    }
    createNewTodo(newTodo)
    setNewTodoText('')
  }

  return(
    <>
      <div className={style.container}>
        <form onSubmit={formatTodo}>
          <input 
            type="text" 
            name="addTodo"
            value={newTodoText}
            onChange = {handleNewTodoChange}
            placeholder="Adicione uma nova tarefa" 
          />
          <button 
            disabled={fieldIsEmpty}
            type='submit'>
            Criar
            <PlusCircle size={20}/>
          </button>
        </form>    
      </div>
    </>
  )
}