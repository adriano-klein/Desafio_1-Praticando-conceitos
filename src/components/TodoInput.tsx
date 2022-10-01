import style from './TodoInput.module.css';
import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Tasks } from './Tasks';

export function TodoInput () {
  const [todos, setTodos] = useState([''])
  const [newTodoText, setNewTodoText] = useState('')

  const isTodoEmpty = todos.length === 1;
  function handleNewTodoChange(event: FormEvent){
    const target = event.target as HTMLInputElement;
    setNewTodoText(target.value);
  }  

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    setTodos([...todos, newTodoText]);
    setNewTodoText('')
  }

  return(
    <>
      <div className={style.container}>
        <form onSubmit={handleCreateNewTodo}>
          <input 
            type="text" 
            name="addTodo"
            value={newTodoText}
            onChange = {handleNewTodoChange}
            placeholder="Adicione uma nova tarefa" 
          />
          <button onSubmit={() => handleCreateNewTodo}>
            Criar
            <PlusCircle size={20}/>
          </button>
        </form>
        <Tasks hasNoTodo = {isTodoEmpty} todos={todos}/>
      </div>
    </>
  )
}