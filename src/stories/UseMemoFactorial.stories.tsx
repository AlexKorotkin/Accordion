import React, {ChangeEvent, useMemo, useState} from 'react';


export default {
    title: 'UseMemo factorial',
    /*component: */
}


export const DifficultCountingExample = () => {

    let [a, setA] = useState(1)
    let [b, setB] = useState(1)
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let result = 1;
        for (let i = 1; i <= a; i++) {
            result = result * i
        }
        return result

    }, [a]) // смотрит за изменением "а". если поменялось, вызывает внутреннюю функцию.

    resultB = useMemo(() => {
        let result = 1;
        for (let i = 1; i <= b; i++) {
            result = result * i
        }
        return result

    }, [b]) // смотрит за изменением "b". если поменялось, вызывает внутреннюю функцию.

    let onChangeInputA = (e: ChangeEvent<HTMLInputElement>) => setA(+e.currentTarget.value)
    let onChangeInputB = (e: ChangeEvent<HTMLInputElement>) => setB(+e.currentTarget.value)
    return <>
        <input value={a} onChange={onChangeInputA} type="text"/>
        <input value={b} onChange={onChangeInputB} type="text"/>
        <div>resultA:{resultA}</div>
        <div>resultB:{resultB}</div>
    </>
}

const SecretUsers = (props: {users: Array<string>}) =>{
    return <div>
        {
            props.users.map((u,i) => <div key={i}> {u} </div> )
        }
    </div>
}
let Users = React.memo(SecretUsers) // чтобы компанента без изменения стейта не перерисовывалась след за другими,
//мы ее оборачиваем в обвертку, которая следит за изменением. И если оно произошло, разрешает перерисоваться.

export const HelpsToReactMemo = () => {

    let [couter, setCouter] = useState(0)
    let [users, setUsers] = useState(["Олег", "Ира", "Валера", "Денис"])

    const newArray = useMemo(()=>{
        const newAray = users.filter( u => u.toLowerCase().indexOf('а') >-1)
        return newAray
    },[users])


    const addUser = ()=> {
        const  newUsers =[`Админ ${new Date().getTime()} `, ... users]
        setUsers(newUsers)
    }
    const removeUser = ()=> {
        const  newUsers =[ ... users];
        newUsers.shift();
        setUsers(newUsers);
    }
    return <>
        <button onClick={()=>{setCouter(couter+1)}}>Click</button>
        {couter}
        <button onClick={addUser}>addUser</button>
        <button onClick={removeUser}>dellUser</button>
        <Users users={newArray}/>
    </>
}