import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento Web Site</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>25/09/2021</td>
                    </tr> 
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.100,00</td>
                        <td>Casa</td>
                        <td>15/09/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}