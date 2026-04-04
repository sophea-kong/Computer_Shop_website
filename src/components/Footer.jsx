import {Cpu,FacebookIcon,YoutubeIcon,InstagramIcon,TwitterIcon, FactoryIcon, Youtube} from 'lucide-react'

function Footer_text({ text_param }){
    return (<a href='#' className='hover:text-[#296eb4]'>{text_param}</a>);
}

function Footer(){
    return (
        <>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 p-10 sm:gap-4 items-center justify-center border-t-1 border-b-1 border-stone-300">
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
                        <ul>
                        <li><Footer_text text_param="Build a PC" /></li>
                        <li><Footer_text text_param="Browse Parts" /></li>
                        <li><Footer_text text_param="Prebuilts" /></li>
                        <li><Footer_text text_param="Deals & offers" /></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-3 justify-center'>
                    <div className="flex items-center font-bold">
                        <h2 className='text-2xl'>Support</h2>
                    </div>
                    <div className='grid grid-cols-1 text-stone-500 text-md'>
                        <ul>
                            <li><Footer_text text_param="Contact Us" /></li>
                            <li><Footer_text text_param="Guide" /></li>
                            <li><Footer_text text_param="FAQ" /></li>
                            <li><Footer_text text_param="Warranty info" /></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-3 justify-center'>
                    <div className="flex items-center font-bold">
                        <h2 className='text-2xl'>Company</h2>
                    </div>
                    <div className='grid grid-cols-1 text-stone-500  text-md'>
                        <ul>
                            <li><Footer_text text_param="About us" /></li>
                            <li><Footer_text text_param="Careers" /></li>
                            <li><Footer_text text_param="Privacy Policy" /></li>
                            <li><Footer_text text_param="Terms and Services" /></li>
                        </ul>
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