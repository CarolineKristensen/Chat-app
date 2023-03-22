import React from "react";

function Contacts() {
    const contacts = [
        { firstName: "Felicia", lastName: "Bergflo", userName: "feliciabergflo"},
        { firstName: "Caroline", lastName: "Kristensen", userName: "carolinekristensen"}
    ];

    return(
        <div>
            Kontakter
            <ul className="contactList">
                {contacts.map((user) => (
                    <li className="contactItem">
                        <p>{user.firstName} {user.lastName}</p>
                        <span id="contactUsername">({user.userName})</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Contacts;