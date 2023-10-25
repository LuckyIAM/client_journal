export default function GetHTML({text}) {

    let text1 = text.slice(0,50)
    let text2 = text.slice(50)


    return <>
    <p>{text1}</p>
    <p>{text2}</p>
    </>
}