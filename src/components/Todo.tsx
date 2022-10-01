import style from './Todo.module.css';
import { Trash, Circle } from 'phosphor-react';

interface DescriptionProps{
  description: string[]
}

export function Todo({description}: DescriptionProps){
  return(
    <div className={style.container} >
      <div className={style.circle}>
        <Circle size={24}/>
        <p>{description}</p>
      </div>
      <div>
        <Trash size={24}/>
      </div>
    </div>
  )
}