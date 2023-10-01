export default function DisplayMessage({ message }) {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <h1 className="text-2xl text-center font-bold text-indigo-500">{message}</h1>
        </div>
    )
}