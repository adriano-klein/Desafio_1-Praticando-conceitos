import style from './TodoDone.module.css';
import { Trash, CheckCircle } from 'phosphor-react';
interface TodoProps{
  todo: {
    description: string;
    id: string;
    key:string;
    done: boolean
  }
  onDeleteTodo: (id: string) => void;
}


export function TodoDone({todo, onDeleteTodo}: TodoProps){
  function handleDeleteTodo(){
    onDeleteTodo(todo['id'])
  }
  return(
    <div className={style.container}>
      <div className={style.circle}>
        <CheckCircle size={24} weight="fill" />
        <p>{todo['description']}</p>
      </div>
      <button
      type='submit'
      onClick={handleDeleteTodo}
      >
        <Trash size={24}/>
      </button>
    </div>
  )
}