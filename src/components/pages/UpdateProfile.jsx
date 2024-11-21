import { updateProfile } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase/firebase.config';

const UpdateProfile = () => {
    const handleUpdate = (e) => {
        e.preventDefault();
        const names = e.target.name.value;
        const photos = e.target.photo.value;
        
        updateProfile(auth.currentUser,{
            displayName: names, photoURL: photos
        })
        .then(res => {
            console.log(res)
        })

    }
    return (
        // <button className="btn" onClick = {()=> document.getElementById('my_modal_4').showModal()}> open modal</button >
        <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <form onSubmit={handleUpdate}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Enter Your Name"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name='photo'
                            placeholder="Your Photo URL"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-[#2E948E] to-[#ecab4a] text-white text-lg">Update</button>
                </div>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>

    );
};

export default UpdateProfile;