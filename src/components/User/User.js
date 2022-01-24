const User = ({user}) => {

    return (
        <div>
            <div>
                <div className={'wrap'}>{user.name} --- {user.username} --- {user.email}</div>
            </div>
        </div>
    );
};

export default User;