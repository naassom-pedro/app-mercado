import Logo from '../assets/AppMercado.png';
import Cart from '../assets/Cart.png';

export function Header() {

    return (
        <header className='header'>
            <nav>
                <img
                    src={Logo}
                    className='logo'
                    alt='Logomarca da AppMercado'
                    title='Logo da AppMercado' />

                <img onClick={() => {
                    alert("Parabéns, a sua compra foi finalizada com sucesso!");
                }}
                    src={Cart}
                    className='cart'
                    alt='Carrinho de compras'
                    title='Finalizar compra' />
            </nav>

            <section className='slogan'>
                <h1>O seu mercado digital</h1>
                <p>Tudo o que você precisa você encontra aqui!</p>
            </section>
        </header>
    );

};