import Clipboard from '../assets/Clipboard.svg'
import style from './TodoEmpty.module.css'

export function TodoEmpty(){
  return(
    <div className={style.container}>
      <img src={Clipboard} alt="" />
      <strong>Você não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}