import LogoIcon from '../../components/logoicon'


export default function SignUp(){
  return(
    <>
      <div>
        <LogoIcon />
        <h3>Criar sua conta</h3>
        <form action="" method="post">
          <input 
            type="text"
            placeholder="Nome"
          />
          <input 
            type="text"
            placeholder="Celular"
          />
        </form>
        <h4>Data de nascimento</h4>
        <h4>
          Isso não será exibido publicamente. Confirme sua própria idade, 
          mesmo se esta conta for de empresa, de um animal de estimação ou outros.
        </h4>
        <div>
          <label for="month">Mês</label>
          <select id="month" name="month">
            <option></option>
            <option>Janeiro</option>
            <option>Fevereiro</option>
            <option>Março</option>
            <option>Abril</option>
            <option>Maio</option>
            <option>Junho</option>
            <option>Julho</option>
            <option>Agosto</option>
            <option>Setembro</option>
            <option>Outubro</option>
            <option>Novembro</option>
            <option>Dezembro</option>
          </select>
          <label for="day">Dia</label>
          <select id="day" name="day">
            <option></option>
            <option>1</option>
            <option>15</option>
            <option>22</option>
            <option>31</option>
          </select>
          <label for="year">Ano</label>
          <select id="year" name="year">
            <option></option>
            <option>1990</option>
            <option>2000</option>
            <option>2010</option>
            <option>2021</option>
          </select>
        </div>
        <button type="submit">Avançar</button>

      </div>
    </>
  )
}