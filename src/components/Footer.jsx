import {Cpu,FacebookIcon,YoutubeIcon,InstagramIcon,TwitterIcon, FactoryIcon, Youtube} from 'lucide-react'

function Footer(){
    return (
        <>
            <div className="grid grid-cols-4 p-10 gap-4 items-center justify-center border-t-1 border-b-1 border-stone-300">
                <div className='flex flex-col'> 
                    <div className='flex items-center'>
                        <Cpu className="bg-[#296eb4] p-2 rounded-xl" color="#ffffff" size={40}></Cpu>
                        <p className="pl-3 text-md font-bold">PC BUILDER SHOP</p>
                    </div>
                    <div className="text-stone-500 text-md p-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veritatis pariatur illum assumenda perspiciatis.</p>
                    </div>
                    <div className='flex gap-4'>
                        <FacebookIcon></FacebookIcon>
                        <YoutubeIcon></YoutubeIcon>
                        <InstagramIcon></InstagramIcon>
                        <TwitterIcon></TwitterIcon>
                    </div>
                </div>
                <div className='flex flex-col gap-3 justify-center'>
                    <div className="flex items-center font-bold">
                        <h2 className='text-2xl'>Shop</h2>
                    </div>
                    <div className='grid grid-cols-1 text-stone-500 text-md'>
                        <p>Build a PC</p>
                        <p>Browse Parts</p>
                        <p>Prebuilts</p>
                        <p>Deals & offers</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 justify-center'>
                    <div className="flex items-center font-bold">
                        <h2 className='text-2xl'>Support</h2>
                    </div>
                    <div className='grid grid-cols-1 text-stone-500 text-md'>
                        <p>Contact Us</p>
                        <p>Gruide</p>
                        <p>FAQ</p>
                        <p>Warranty info</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 justify-center'>
                    <div className="flex items-center font-bold">
                        <h2 className='text-2xl'>Company</h2>
                    </div>
                    <div className='grid grid-cols-1 text-stone-500 text-md'>
                        <p>About us</p>
                        <p>Careers</p>
                        <p>Privacy Policy</p>
                        <p>Terms and Services</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center text-stone-400 p-4'>
                <p>© 2026 PC Builder Shop. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer;