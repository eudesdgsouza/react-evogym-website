import Logo from '@/assets/Logo.png';

const Footer = (): JSX.Element => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='w-5/6 mx-auto gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="footer-logo" />
                <p className='my-5'>
                    Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                    purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                    orci ut habitant laoreet. Iaculis tristique.
                </p>
                <p>© Evogym Todos os Direitos Reservados. EudesGomes</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Link 1</p>
                <p className="my-5">Link 2</p>
                <p>Link 3</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contate-nos</h4>
                <p className="my-5">evogym@contato.com.br</p>
                <p>(99)99999-9999</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;