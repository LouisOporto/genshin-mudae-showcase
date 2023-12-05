
// import weapons from './data/genshinData.json'

// const myWeapons = JSON.parse(weapons);

export default function Card({ characterName, level, constellation, ascension }) {
    // console.log(myWeapons);
    return (
        <div className="Card">
            <h2>{characterName}</h2>
            {/* insert weapon here using characterName as locationp */}
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