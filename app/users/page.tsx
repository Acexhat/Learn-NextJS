import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}

const UsersPage = async () => {
  // nextJS data caching only work with fetch and not with other third party libraries like axios and all
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // next: {
    //   revalidate: 10,
    // },
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <div>
      <h1>Users Page</h1>
      {/* if you use fetch nextJS will treat this component as a 
       static component and will not render it again so in this case in production 
       time will be same on every reload */}
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
