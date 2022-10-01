import style from './Tasks.module.css'
import Clipboard from '../assets/Clipboard.svg'
import { Todo } from './Todo'

interface TodoProps{
  todos: string[];
  hasNoTodo: boolean;
}

export function Tasks({todos, hasNoTodo}: TodoProps){
  return(
    <>
      <div className={style.container} >
        <div className={style.header}>
          <div className={style.todo}>
            <span>Tarefas Criadas</span>
            <div>0</div>
          </div>

          <div className={style.done}>
            <span>Concluídas</span>
            <div>0</div>
          </div>

        </div>
        <div className={style.tasks}>
          {hasNoTodo ?
          <>
          <img src={Clipboard} alt="clipboard" />
          <section>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </section>
          </>
          :
          todos.map(todo => {
            return <Todo description={todos}/>
          })
        } 
        </div>
      </div>
    </>
  )
}