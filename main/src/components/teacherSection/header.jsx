import './header.css';
export default function Header(){
    return (
        <>
        <header className="z-50 relative">
           <button onClick={()=>navigation('/')} className="flex items-center flex-row gap-4 pl-5 pt-5 text-white">
           <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
           <h1 className="text-2xl font-semibold">Pilih Guru</h1>
           </button>
        </header>
        </>
    )
}