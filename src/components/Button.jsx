export default function Button({onClick, text}) {
    return <>
        <button className="bg-orange-500 font-bold text-white rounded mx-1 mt-4 px-4 py-2" onClick={onClick}>{text}</button>
    </>
}