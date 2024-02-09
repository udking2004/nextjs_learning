import React from 'react'

interface Users{ 
  id: number;
  name: string;
}

const NewUserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{next: { revalidate:10 }});
  const users: Users[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user=><li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default NewUserPage
