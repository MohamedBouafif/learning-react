import logoUrl from '/src/assets/Chef Claude Icon.png'

export default function Header(){
    
    return(
        <header className = 'header'>
            <img className = 'logo-img'src = {logoUrl} alt='Chef Claude logo'/>
            <span className = 'logo-title'>Chef Claude</span>
        </header>
    )
}