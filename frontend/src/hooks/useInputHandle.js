import { useState } from "react";


function useInputHandle() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [secretAnswer, setSecretAnswer] = useState("");
    console.log(name, email, password, phone, address, secretAnswer)
    return (
        [setName, setEmail, setPassword, setPhone, setAddress, setSecretAnswer]
    )
}

export default useInputHandle;