import { useEffect } from 'react';
import * as C from './AlunosListaStyle'
import { useEffect } from 'react';
const AlunosLista =()=>{
    
    const [jsonAlunos, setJsonAlunos] = useState();
    const listarAlunos = async () => {
        setJsonAlunos([]);
        listaAlunos=[]
        let alunos = await Api.Read('aluno');
        alunos.forEach((doc) => {
            listaAlunos.push(doc.data());
            console.log("entrou")
        })
        setJsonAlunos(listaAlunos);
        localStorage.setItem('jsonAlunos', JSON.stringify(listaAlunos))

    }
    useEffect(()=>{
        listarAlunos()
    },[])

    return(

        <>
        <C.AlunosListaContainer>
            Alunos
        </C.AlunosListaContainer>
        
        </>
    )
}