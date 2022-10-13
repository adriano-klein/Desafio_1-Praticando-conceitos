import style from './Todo.module.css';
import { Trash, Circle } from 'phosphor-react';
interface DescriptionProps{
  description: {
    description: string;
    id: string;
    key:string;
    done: boolean
  }
  onDeleteComment: (id: string) => void;
}


export function Todo({description, onDeleteComment}: DescriptionProps){

  function handleDeleteTodo(){
    onDeleteComment(description['id'])
  }

  return(
    <div className={style.container}>
      <div className={style.circle}>
        <Circle size={24}/>
        <p>{description['description']}</p>
      </div>
      <button
      onClick={handleDeleteTodo}
      type='submit'
      >
        <Trash size={24}/>
      </button>
    </div>
  )
}