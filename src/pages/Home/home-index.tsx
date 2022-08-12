import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/header-index';
import { Container, Content, FilterForm, TableContent} from './home-styles';
import axios from 'axios';
import { UserData } from '../../types/types-index';
import  ReactLoading from 'react-loading'
import { ModalInfo } from '../../components/ModalInfo/modal-index';

export function Home(){

    const [dataFetching, setDataFetching] = useState<UserData[]>([])
    const [dataFetchingBackup, setDataFetchingBackup] = useState<UserData[]>([])

    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [searchCountry, setSearchCountry] = useState('');

    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
    const [dataUser, setDataUser] = useState<UserData>();

    function handleOpenModalInfo(userSelected: UserData){
        setDataUser(userSelected);
        setIsModalInfoOpen(true);
    }

    function handleCloseModalInfo(){
        setIsModalInfoOpen(false);
    }

    useEffect(() => {
        axios.get('https://randomuser.me/api/', {
            params: {
                results: 10
            }
        })
        .then(response =>{
            console.log(response);
            setDataFetching(response.data.results);
            setDataFetchingBackup(response.data.results);
        })
        .catch(error => {
            console.log(error);
            setError(error);
        })
        .finally(() => {
            setIsFetching(false);
        })
    }, [])

    useEffect(() => {
        if(search.length !== 0){
            const filter = dataFetching.filter(f => 
                f.name.first.toUpperCase().indexOf(search.toUpperCase()) >= 0 || 
                f.name.last.toUpperCase().indexOf(search.toUpperCase()) >= 0
            );
            setDataFetching(filter);
        }
    },[search]);

    useEffect(() => {
        if(searchCountry !== ''){
            const filterCountry = dataFetching.filter(a => a.location.country.toUpperCase().indexOf(searchCountry.toUpperCase()))
            setDataFetching(filterCountry)
        } else {
            setDataFetching(dataFetchingBackup);
        }
    },[searchCountry])

    return(
        <Container>
            <Header />
            <Content>
                <h1>Lista de Alunos do Curso StackX</h1>
                {
                isFetching ? (
                    <div className='loading'>
                        <ReactLoading type="spin" color="#2CaC6C"/>
                    </div>
                    
                ) : (
                    <>
                    <FilterForm>
                        <div>
                            <label htmlFor="nome" >Pesquisar</label>
                            <input 
                                type="text" 
                                id='nome' 
                                placeholder='Nome do Aluno'
                                onChange={(e) => setSearch(e.target.value)}/>
                                
                        </div>
                        <div>
                            <label htmlFor="nacionalidade" >Nacionalidade</label>
                            <select 
                                name="nacionalidade" 
                                id="nacionalidade"
                                onChange={(e) => setSearchCountry(e.target.value)}
                                ><option value="">Todas</option>
                                {
                                    dataFetching.map((e, index) => {
                                        return(
                                            <option key={index} value={e.location.country}>
                                                {e.location.country}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </FilterForm>
                    <TableContent>
                        
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sexo</th>
                                <th>Nacionalidade</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
    
                        <tbody>
                            {
                                dataFetching.map((e, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{`${e.name.first} ${e.name.last}`}</td>
                                            <td>{e.gender}</td>
                                            <td>{e.nat}</td>
                                            <td><button onClick={() => handleOpenModalInfo(e)}>Visualizar</button></td>
                                        </tr>
                                    )
                                })
                            }
                          
                           
                        </tbody>
                      
                    </TableContent>
                        </>
                    )
                }
              
            </Content>
            <ModalInfo
                isOpen={isModalInfoOpen}
                onRequestClose={handleCloseModalInfo}
                userSelected={dataUser}
            />
        </Container>
    )
}
