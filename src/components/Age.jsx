import react, { useEffect } from 'react';

export default () => {
    const [age, setAge] = react.useState(0);
    const birthDate = new Date('April 5, 2005 11:59:00')

    useEffect(() => {
        const now = new Date();
        const diff = now.getTime() - birthDate.getTime();
        const date = new Date(diff);
        setAge(Math.abs(date.getUTCFullYear() - 1970))
    }, [])
    setInterval(() => {
        const now = new Date();
        const diff = now.getTime() - birthDate.getTime();
        const date = new Date(diff);
        setAge(Math.abs(date.getUTCFullYear() - 1970))
    }, 1000)
    return (
        <h5>Age: <p>{age}</p>yrs old</h5>
    )

}