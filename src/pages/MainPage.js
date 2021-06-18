import React, {useState, useEffect} from 'react';
import Section from '../components/Section/Section';
import { Grid } from '../components/GeneralStyles';
import UserCard from '../components/UserCard/UserCard';
import { getUsers } from "../API/users";


const MainPage = (props) => {
    const [users, setUsers] = useState("");

    useEffect(() => {
        if (users.length > 0) {
          setUsers(users);
        } else {
          getUsers(localStorage.getItem("token")).then((res) => {
            const users = res.users;
            setUsers(users);
          });
        }
      }, []);

  return (
    <>
        <Section title="Speck Academy 2021">
            {users &&
                <Grid columns={3}>
                    {users.map(user => user &&
                        <UserCard
                            uloga={user.uloga}
                            ime={user.ime}
                            prezime={user.prezime}
                            mail={user.mail}
                            route={`/user/${user.id}`}
                        />
                        )
                    }
                </Grid>
            }
        </Section>
    </>
  );}

export default MainPage;