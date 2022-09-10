import * as C from './CadastroAlunosStyle';
import { useState } from 'react';
import aluno_avatar from '../../assets/aluno_avatar.png';
import Api from '../../Firebase';

const CadastroAlunos = () => {

    const [aluno, setAluno] = useState({matricula:'',nome: '', foto: aluno_avatar, serie: '', turma: '', turno: '', endereco: '', telefone: '' })
    const handleCadastroAluno = () => {
        let collection = 'aluno';
        Api.Update(collection,aluno,aluno.matricula).then(() => {
            alert(collection+" cadastrado com sucesso!");
        }).catch(() => {
            alert("Ocorreu um erro ao cadastrar o livro.")
        });
    }

    const carregaFotoAluno = async (e) => {
        console.log(e.target.files);
        let file = e.target.files[0];
        let base64 = await converteBase64(file);
        console.log(base64);
        let foto = 'foto';
        setAluno({ ...aluno, [foto]: base64 })
    }
    const converteBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    return (
        <C.ContainerPrincipalCadastroAlunos>
            <C.ContainerCadastroAlunos>
                <C.SubContainerCadastroAlunos >
                    <C.SubContainerCadastroNomeAlunos style={{ width: "70%" }}>
                        <C.LabelAluno style={{ width: "90%" }}>
                            Matrícula:
                            <C.InputAluno type="number" onChange={(e) => {
                                aluno.matricula = e.target.value;
                            }}
                                placeholder='Digite a matrícula do aluno'
                                style={{ width: "95%" }}
                            />
                        </C.LabelAluno>
                        <C.LabelAluno style={{ width: "90%" }}>
                            Nome:
                            <C.InputAluno onChange={(e) => {
                                aluno.nome = e.target.value;
                            }}
                                placeholder='Digite o nome completo do aluno'
                                style={{ width: "95%" }}
                            />
                        </C.LabelAluno>
                        </C.SubContainerCadastroNomeAlunos >
                        <C.ContainerFotoAluno>

                            <C.ImagemAluno src={aluno.foto} />
                            <C.InputCadastroFoto type="file" onChange={(e) => {
                                carregaFotoAluno(e);
                            }} />
                        </C.ContainerFotoAluno>
                   
                </C.SubContainerCadastroAlunos>
                <C.SubContainerCadastroAlunos>
                    <C.LabelAluno>
                        Série:
                        <C.InputSelectAluno onChange={(e) => {
                            aluno.serie = e.target.value;
                        }}>
                            <C.OptionAluno  defaultValue=""></C.OptionAluno>
                            <C.OptionAluno value="1° SÉRIE">1° SÉRIE</C.OptionAluno>
                            <C.OptionAluno value="2° SÉRIE">2° SÉRIE</C.OptionAluno>
                            <C.OptionAluno value="3° SÉRIE">3° SÉRIE</C.OptionAluno>
                            <C.OptionAluno value="EJA M">EJA MÉDIO</C.OptionAluno>
                        </C.InputSelectAluno>
                    </C.LabelAluno>
                    <C.LabelAluno>
                        Turma:
                        <C.InputSelectAluno onChange={(e) => {
                            aluno.turma = e.target.value;
                        }}>
                            <C.OptionAluno defaultValue=""></C.OptionAluno>
                            <C.OptionAluno value="A">A</C.OptionAluno>
                            <C.OptionAluno value="B">B</C.OptionAluno>
                            <C.OptionAluno value="C">C</C.OptionAluno>
                            <C.OptionAluno value="D">D</C.OptionAluno>
                            <C.OptionAluno value="E">E</C.OptionAluno>
                        </C.InputSelectAluno>
                    </C.LabelAluno>

                    <C.LabelAluno>
                        Turno:
                        <C.InputSelectAluno onChange={(e) => {
                            aluno.turno = e.target.value;
                        }}>
                            <C.OptionAluno defaultValue=""></C.OptionAluno>
                            <C.OptionAluno value="MANHÃ">MANHÃ</C.OptionAluno>
                            <C.OptionAluno value="TARDE">TARDE</C.OptionAluno>
                            <C.OptionAluno value="NOITE">NOITE</C.OptionAluno>
                        </C.InputSelectAluno>
                    </C.LabelAluno>
                </C.SubContainerCadastroAlunos>
                <C.SubContainerCadastroAlunos style={{ flexDirection: "column" }}>
                    <C.LabelAluno>
                        Endereço:
                        <C.InputAluno onChange={(e) => {
                            aluno.endereco = e.target.value;
                        }}
                            placeholder='Digite o endereço no formato Rua/Av/Trav N°'
                            style={{ width: "94%" }} />
                    </C.LabelAluno>
                    <C.LabelAluno>
                        Telefone:
                        <C.InputAluno onChange={(e) => {
                            aluno.telefone = e.target.value;
                        }}
                            placeholder='Digite o telefone no formato (xx)9xxxx-xxxx'
                            style={{ width: "94%" }}
                        />
                    </C.LabelAluno>
                </C.SubContainerCadastroAlunos>

                <C.BotaoCadastro onClick={handleCadastroAluno}>Cadastrar</C.BotaoCadastro>
            </C.ContainerCadastroAlunos>
        </C.ContainerPrincipalCadastroAlunos>

    );
}
export default CadastroAlunos;