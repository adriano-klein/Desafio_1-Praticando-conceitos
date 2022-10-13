import style from './Tasks.module.css'
import { TodoInput } from './TodoInput';
import { useState } from 'react';
import { Todo } from './Todo';
import { TodoEmpty } from './TodoEmpty';

interface TodoProps{
  description: string;
  id?: string;
  key:string;
  done: boolean;
}

export function Tasks(){
  const [todos, setTodos] = useState<TodoProps[]>([])

  function createNewTodo(newTodo: TodoProps[]){
    setTodos([...todos, newTodo]);
  }


  function deleteTodo(id: string){
    const todosWithoutDeletedTodo = todos.filter(todo => {
      return todo[id].done = true
    });
    setTodos(todosWithoutDeletedTodo);
  }

  const isEmpty = todos.length === 0
  
  // TODO: contar as atividades feitas
  const deletedTodo = todos.filter(todo => {
    return todo.done === true
  })
  
  return(
    <>
    <TodoInput createNewTodo={createNewTodo}/>
      <div className={style.container} >
        <div className={style.header}>
          <div className={style.todo}>
            <span>Tarefas Criadas</span>
            <div> {todos.length} </div>
          </div>

          <div className={style.done}>
            <span>Concluídas</span>
            <div> {deletedTodo.length} de {todos.length}</div>
          </div>
        </div>
        <div>
          {isEmpty ? <TodoEmpty /> : 
          todos.map(todo => {
            if (todo.done === false) {
             return <Todo description={todo} id={todo['id']} key={todo['id']} onDeleteComment={deleteTodo}/>
            }
          })
        }
        </div>
      </div>
    </>
  )
}