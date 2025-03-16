export default function ABoutPage(){

const tex:React.CSSProperties={
textShadow:`2px 2px 4px aqua`
}

return(
<div className="w-full h-full text-lg sm:text-xl font-mono text-[whitesmoke]" style={tex}>
<h1 className=" text-xl sm:text-3xl font-extrabold font-mono m-4">About:</h1>
<hr/>
<p className="m-4">
At <b>Retail Store</b>, we believe shopping should be an experience—one that feels as satisfying as the rhythmic clack of a vintage typewriter. 
<br/><br/>
While our store is powered by modern technology, our user interface is a tribute to the golden era of typewritten elegance.
<br/><br/>
<u>A Modern Store with a Classic Touch:</u><br/>
We combine the efficiency of e-commerce with the nostalgic charm of typewriters. Every detail, from the font styles to the interactive elements, 
is designed to give you a delightful, old-school feel—without compromising on speed, ease, or functionality.
<br/><br/>
<u>What We Offer:</u><br/>
🛍 A Smooth Shopping Experience - As precise and effortless as typing on a well-tuned machine.
<br/>
⌨ Aesthetic Meets Functionality - A unique typewriter-inspired interface that blends nostalgia with modern e-commerce.
<br/>
📦 Quality Products, Curated for You - Browse, select, and order with confidence.
<br/><br/>
Whether you're here for a quick purchase or simply enjoying the interface, 
we hope every click feels as delightful as a perfectly placed keystroke.
<br/><br/>
Happy Shopping,<br/>
The <b>Retail Store</b> Team
</p>
</div>)    
}