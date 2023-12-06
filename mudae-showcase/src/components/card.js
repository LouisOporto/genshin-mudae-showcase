
// import weapons from './data/genshinData.json'

// const myWeapons = JSON.parse(weapons);

export default function Card({ characterName, weapon, level, constellation, ascension }) {
    // console.log(myWeapons);
    return (
        <div className="Card">
            {/* image here maybe using map with characterName:image? */}
            <h2>{characterName.replace(/([a-z])([A-Z])/g, '$1 $2')}</h2>
            <p>Equipped: {weapon.replace(/([a-z])([A-Z])/g, '$1 $2')}</p>
            <p>Level {level}</p>
            <p>C{constellation}</p>
            <p>A{ascension}</p>
        </div>
    )
}



// export default function ShelfRow({ character1, character2, character3, character4 }) {
//     return (
//         <div className="shelfRow">
//             <Card characterName={character1} />
//             <Card characterName={character2} />
//             <Card characterName={character3} />
//             <Card characterName={character4} />
//         </div>
//     )
// }