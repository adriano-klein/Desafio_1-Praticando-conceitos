import style from './Todo.module.css';
import { Trash, Circle } from 'phosphor-react';
interface DescriptionProps{
  todo: {
    description: string;
    id: string;
    key:string;
    done: boolean
  }
  onDoneTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}


export function Todo({todo, onDoneTodo, onDeleteTodo}: DescriptionProps){
  function handleDeleteTodo(){
    onDeleteTodo(todo['id']);
  }

  function handleDoneTodo(){
    onDoneTodo(todo['id'])
  }

  return(
    <div className={style.container}>
      <button 
        className={style.circle}
        onClick={handleDoneTodo}
        type='submit'
        >
        <Circle size={24}/>
        <p>{todo['description']}</p>
      </button>
      <div className={style.containerButton}>
        <button
        onClick={handleDeleteTodo}
        type='submit'
        >
          <Trash size={24}/>
        </button>
      </div>
    </div>
  )
}