import * as C from './CadastroAlunosStyle';
import { useState } from 'react';
import aluno_avatar from'../../assets/aluno_avatar.png';
const CadastroAlunos =()=>{

    const[aluno,setAluno]=useState({nome:'',foto:aluno_avatar,serie:'',turma:'',turno:'',endereco:'',telefone:''})
    const handleCadastroAluno =()=>{

    }


    return(
        <>
        <C.ContainerCadastroAlunos>
            <C.SubContainerCadastroAlunos>
            <C.LabelAluno style={{width:"80%"}}>
                Nome:
                <C.InputAluno 
                placeholder='Digite o nome completo do aluno'
                style={{width:"95%"}}
                />
            </C.LabelAluno>
            <C.ImagemAluno src={aluno.foto}/>
            </C.SubContainerCadastroAlunos>
            <C.SubContainerCadastroAlunos>
            <C.LabelAluno>
                Série:
                <C.InputSelectAluno>
                    <C.OptionAluno value="" selected></C.OptionAluno>
                    <C.OptionAluno value="1° SÉRIE">1° SÉRIE</C.OptionAluno>
                    <C.OptionAluno value="2° SÉRIE">2° SÉRIE</C.OptionAluno>
                    <C.OptionAluno value="3° SÉRIE">3° SÉRIE</C.OptionAluno>
                    <C.OptionAluno value="EJA M">EJA MÉDIO</C.OptionAluno>
                </C.InputSelectAluno>
            </C.LabelAluno>
            <C.LabelAluno>
                Turma:
                <C.InputSelectAluno placeholder='Selecione a turma do aluno'>
                <C.OptionAluno value="" selected></C.OptionAluno>
                    <C.OptionAluno value="A">A</C.OptionAluno>
                    <C.OptionAluno value="B">B</C.OptionAluno>
                    <C.OptionAluno value="C">C</C.OptionAluno>
                    <C.OptionAluno value="D">D</C.OptionAluno>
                    <C.OptionAluno value="E">E</C.OptionAluno>
                </C.InputSelectAluno>
            </C.LabelAluno>
            
            <C.LabelAluno>
                Turno:
                <C.InputSelectAluno>
                <C.OptionAluno value="" selected></C.OptionAluno>
                    <C.OptionAluno value="MANHÃ">MANHÃ</C.OptionAluno>
                    <C.OptionAluno value="TARDE">TARDE</C.OptionAluno>
                    <C.OptionAluno value="NOITE">NOITE</C.OptionAluno>
                </C.InputSelectAluno>
            </C.LabelAluno>
            </C.SubContainerCadastroAlunos>
            <C.SubContainerCadastroAlunos style={{flexDirection:"column"}}>
            <C.LabelAluno>
                Endereço:
                <C.InputAluno 
                placeholder='Digite o endereço no formato Rua/Av/Trav N°'
                style={{width:"94%"}}/>
            </C.LabelAluno>
            <C.LabelAluno>
                Telefone: 
                <C.InputAluno 
                placeholder='Digite o telefone no formato (xx)9xxxx-xxxx'
                style={{width:"94%"}}
                />
            </C.LabelAluno>
            </C.SubContainerCadastroAlunos>
            
        <C.BotaoCadastro onClick={handleCadastroAluno}>Cadastrar</C.BotaoCadastro>
        </C.ContainerCadastroAlunos>
        </>

    );
}
export default CadastroAlunos;