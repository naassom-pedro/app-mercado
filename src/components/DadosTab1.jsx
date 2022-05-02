// Fiz o mapeamento do arquivo json, para manipular e consumir os dados.
import { produtos } from '../assets/produtos.json';

export function DadosTab1() {
    // Validação da quantidade de cada produto.
    produtos.map(i => {
        if (i.quantidade == 0) {
            i.quantidade = "(não disponível)"
        } else if (i.quantidade > 0) {
            i.quantidade = `(qtd ${i.quantidade})`
        }
    })
    // Renderizando a lista com condicional IF.
    return (
        <section>
            {produtos.map(item => {
                if (item.categoria === "frutas") {
                    return (
                        <div className='lista-itens' key={item.produtoId}>
                            <div className="lista-item">
                                <img src="./src/assets/basket.png" alt="Cesta de compras do itam dos produtos" className='basket-icon' />
                                <h1>{item.descricao}</h1>
                                <p>{item.quantidade}</p>
                            </div>
                            <div className="btns-itens">
                                <button id='btn-item-remove' className='btn-item'>-</button>
                                <button id='btn-item-add' className='btn-item'>+</button>
                            </div>

                        </div>

                    );
                }
            })}
        </section>
    )
}
