import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';

const Profile = () => {
    const {user} = useContext(authContext);
    return (
        <div className="flex justify-center items-center mt-10">
            <div className="w-[500px] h-[500px] bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-gradient-to-r from-[#2E948E] to-[#ecab4a] rounded-t-xl -mt-10 -mx-6 p-20">
                    <h2 className="text-white text-2xl font-bold">
                        <span role="img" aria-label="wave">
                            👋
                        </span>{" "}
                        Welcome
                    </h2>
                </div>
                <div className="relative -mt-12">
                    <img
                        className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md"
                        src={user.photoURL}
                        alt="Profile"
                    />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{user.displayName}</h3>
                <p className="text-gray-600">{user.email}</p>
                <button className="bg-gradient-to-r from-[#2E948E] to-[#ecab4a] text-white px-20 text-xl mt-14 py-3 rounded-lg">
                    Update
                </button>
            </div>
        </div>
    );
};

export default Profile;