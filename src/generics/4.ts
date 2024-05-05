type User2 = {
    name: string;
    surname: string;
    email: string;
    password: string;
}

function createOrUpdateUser(initialValues: Partial<User2>): Partial<User2> {
    // Оновлення користувача
    return { ...initialValues }
}  

createOrUpdateUser({
    name: 'John',
    password: '12345'
})

