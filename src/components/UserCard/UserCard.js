import React from 'react';
import {
    UserCard as UserCardWrapper,
    Content,
    Uloga,
    Row,
    Ime,
    Prezime,
    Mail
} from './UserCardStyle';

const UserCard = ({
    uloga,
    ime,
    prezime,
    mail
}) => {
    return (
        <UserCardWrapper>
            <Uloga>{uloga}</Uloga>
            <Content>
                <Row>
                    <Ime>{ime}</Ime>
                    <Prezime>{prezime}</Prezime>
                </Row>
                <Row>
                    <Mail>{mail}</Mail>
                </Row>
            </Content>
        </UserCardWrapper>
    );
}

export default UserCard;