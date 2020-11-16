import React, {useState} from 'react';


export default {
    title: 'React memo demo',
    /*component: */
}

const NewMessagesCounter = (props: {count: number}) =>{
 return <div>
     {props.count}
 </div>
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

export const Example1 = () => {

    let [couter, setCouter] = useState(0)
    let [users, setUsers] = useState(["Олег", "Ира", "Валера", "Денис"])
    const addUser = ()=> {
        const  newUsers =[`User ${new Date().getTime()} `, ... users]
        setUsers(newUsers)
    }
    const removeUser = ()=> {
        const  newUsers =[ ... users];
        newUsers.shift();
        setUsers(newUsers);
    }
    return <>
        <button onClick={()=>{setCouter(couter+1)}}>Click</button>
        <NewMessagesCounter count={couter}/>
        <button onClick={addUser}>addUser</button>
        <button onClick={removeUser}>dellUser</button>
        <Users users={users}/>
    </>
}